// Applies pending migrations at deploy time, baselining first when the
// database needs it.
//
// The KiberEduAz schema was originally applied to Supabase by hand, outside
// Prisma, so the database has all the tables but no `_prisma_migrations`
// bookkeeping. In that state a plain `prisma migrate deploy` tries to replay
// 20260811000000_init, hits "relation already exists" and fails - which is
// why migrations were kept out of the build command until now.
//
// This script closes that gap. It looks at the database and picks one of three
// paths:
//
//   fresh      - no tables at all -> let migrate deploy build the schema.
//   baseline   - tables exist, no bookkeeping -> mark the migrations that
//                produced the current schema as already applied, then deploy
//                the rest.
//   normal     - bookkeeping exists -> just deploy.
//
// Running it twice is harmless: the second run finds the bookkeeping and takes
// the `normal` path.
//
// It is deliberately allowed to FAIL THE BUILD. On Render a failed build
// leaves the previous deploy serving traffic, so "migration failed" means
// "old code keeps running", never "new code runs against an old schema".

import { execFileSync } from 'node:child_process';
import { PrismaClient } from '@prisma/client';

/// Migrations whose effects were applied to production by hand, before Prisma
/// was tracking anything. These are the ones to mark as already applied when
/// baselining - never to actually run.
const ALREADY_APPLIED_BY_HAND = [
  '20260811000000_init',
  '20260813000000_teacher_admin_panels',
];

function prisma(...args) {
  console.log(`\n> prisma ${args.join(' ')}`);
  execFileSync('npx', ['prisma', ...args], { stdio: 'inherit', shell: true });
}

async function inspect() {
  // migrate deploy uses DIRECT_URL; check the same database it will touch.
  const client = new PrismaClient({
    datasources: { db: { url: process.env.DIRECT_URL ?? process.env.DATABASE_URL } },
  });

  try {
    const [row] = await client.$queryRaw`
      select
        to_regclass('public._prisma_migrations') is not null as has_bookkeeping,
        to_regclass('public.profiles')           is not null as has_schema
    `;

    return { hasBookkeeping: row.has_bookkeeping, hasSchema: row.has_schema };
  } finally {
    await client.$disconnect();
  }
}

async function main() {
  if (!process.env.DATABASE_URL && !process.env.DIRECT_URL) {
    console.error('DATABASE_URL / DIRECT_URL are not set - refusing to guess.');
    process.exit(1);
  }

  const { hasBookkeeping, hasSchema } = await inspect();

  if (!hasBookkeeping && hasSchema) {
    console.log(
      'Schema exists but Prisma has no migration history: baselining the ' +
        'migrations that were applied by hand, then deploying the rest.',
    );

    for (const migration of ALREADY_APPLIED_BY_HAND) {
      prisma('migrate', 'resolve', '--applied', migration);
    }
  } else if (!hasSchema) {
    console.log('Empty database: migrate deploy will build the schema from scratch.');
  } else {
    console.log('Migration history present: deploying whatever is pending.');
  }

  prisma('migrate', 'deploy');
  await assertBootSchema();

  console.log('\nMigrations are up to date.');
}

/// Same fail-fast the API runs at boot. Catches a `migrate resolve --applied`
/// that marked a migration done without the SQL actually landing, which would
/// otherwise ship new code against a schema that 500s every authenticated call.
async function assertBootSchema() {
  const client = new PrismaClient({
    datasources: { db: { url: process.env.DIRECT_URL ?? process.env.DATABASE_URL } },
  });

  try {
    const unfinished = await client.$queryRaw`
      SELECT migration_name
      FROM _prisma_migrations
      WHERE finished_at IS NULL
    `;

    if (unfinished.length > 0) {
      const names = unfinished.map((row) => row.migration_name).join(', ');

      throw new Error(
        `Unfinished Prisma migrations after deploy: ${names}. ` +
          '`_prisma_migrations.finished_at` is NULL. Inspect `logs`; only run ' +
          '`prisma migrate resolve --applied <name>` after confirming the SQL applied.',
      );
    }

    const [row] = await client.$queryRaw`
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'profiles'
          AND column_name = 'deleted_at'
      ) AS has_deleted_at
    `;

    if (row?.has_deleted_at !== true && row?.has_deleted_at !== 't') {
      throw new Error(
        '`profiles.deleted_at` is still missing after migrate deploy. ' +
          'JwtAuthGuard reads this column on every authenticated request.',
      );
    }
  } finally {
    await client.$disconnect();
  }
}

main().catch((error) => {
  console.error('\nMigration step failed, so the build fails too. The previous');
  console.error('deploy keeps serving traffic - new code is never started');
  console.error('against a schema it does not match.\n');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
