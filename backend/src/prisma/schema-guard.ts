/// Fail-fast checks so the API never serves traffic against a half-applied
/// Prisma migration. The 12–14 Sep outage was exactly that: `_prisma_migrations`
/// had a row with `finished_at IS NULL` (or the security migrations never ran),
/// `JwtAuthGuard` selected `profiles.deleted_at` on every authenticated request,
/// and every authenticated route returned 500 while `/health` stayed green.

export type SchemaHealth = {
  hasBookkeeping: boolean;
  unfinishedMigrations: string[];
  hasDeletedAt: boolean;
};

export class SchemaNotReadyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SchemaNotReadyError';
  }
}

export function assertSchemaReady(health: SchemaHealth): void {
  if (health.unfinishedMigrations.length > 0) {
    const names = health.unfinishedMigrations.join(', ');

    throw new SchemaNotReadyError(
      `Refusing to boot: Prisma migration(s) did not finish: ${names}. ` +
        'A previous `prisma migrate deploy` left `_prisma_migrations.finished_at` NULL. ' +
        'Inspect that row (especially `logs`). If the SQL actually applied, mark it with ' +
        '`npx prisma migrate resolve --applied <name>`; otherwise fix the SQL and rerun ' +
        '`npx prisma migrate deploy`.',
    );
  }

  if (!health.hasDeletedAt) {
    throw new SchemaNotReadyError(
      'Refusing to boot: `profiles.deleted_at` is missing. JwtAuthGuard reads this ' +
        'column on every authenticated request, so the API would return 500. ' +
        'Run `npx prisma migrate deploy` (migration 20260911000300_account_deletion).',
    );
  }
}

type Queryable = {
  $queryRaw: (query: TemplateStringsArray, ...values: never[]) => Promise<unknown>;
};

function asBoolean(value: unknown): boolean {
  return value === true || value === 't' || value === 'true';
}

export async function readSchemaHealth(client: Queryable): Promise<SchemaHealth> {
  const [meta] = (await client.$queryRaw`
    SELECT
      to_regclass('public._prisma_migrations') IS NOT NULL AS has_bookkeeping,
      EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'profiles'
          AND column_name = 'deleted_at'
      ) AS has_deleted_at
  `) as Array<{ has_bookkeeping: unknown; has_deleted_at: unknown }>;

  const hasBookkeeping = asBoolean(meta?.has_bookkeeping);
  let unfinishedMigrations: string[] = [];

  if (hasBookkeeping) {
    const rows = (await client.$queryRaw`
      SELECT migration_name
      FROM _prisma_migrations
      WHERE finished_at IS NULL
    `) as Array<{ migration_name: string }>;

    unfinishedMigrations = rows.map((row) => row.migration_name).filter(Boolean);
  }

  return {
    hasBookkeeping,
    unfinishedMigrations,
    hasDeletedAt: asBoolean(meta?.has_deleted_at),
  };
}
