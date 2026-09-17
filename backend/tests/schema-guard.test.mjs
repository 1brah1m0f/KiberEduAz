import assert from "node:assert/strict";
import test from "node:test";

import {
  assertSchemaReady,
  readSchemaHealth,
  SchemaNotReadyError,
} from "../src/prisma/schema-guard.ts";

const ready = {
  hasBookkeeping: true,
  unfinishedMigrations: [],
  hasDeletedAt: true,
};

test("a fully applied schema is allowed to boot", () => {
  assert.doesNotThrow(() => assertSchemaReady(ready));
});

test("bookkeeping can be missing when the required column is already there", () => {
  assert.doesNotThrow(() =>
    assertSchemaReady({
      hasBookkeeping: false,
      unfinishedMigrations: [],
      hasDeletedAt: true,
    }),
  );
});

test("unfinished migrations fail fast even if deleted_at exists", () => {
  assert.throws(
    () =>
      assertSchemaReady({
        ...ready,
        unfinishedMigrations: ["20260911000200_rls_legacy_tables"],
      }),
    (error) => {
      assert.equal(error instanceof SchemaNotReadyError, true);
      assert.match(error.message, /20260911000200_rls_legacy_tables/);
      assert.match(error.message, /finished_at/);
      return true;
    },
  );
});

test("a missing profiles.deleted_at column fails fast", () => {
  assert.throws(
    () => assertSchemaReady({ ...ready, hasDeletedAt: false }),
    (error) => {
      assert.equal(error instanceof SchemaNotReadyError, true);
      assert.match(error.message, /deleted_at/);
      assert.match(error.message, /20260911000300_account_deletion/);
      return true;
    },
  );
});

test("readSchemaHealth queries unfinished rows only when bookkeeping exists", async () => {
  const sql = [];
  const client = {
    async $queryRaw(strings) {
      const text = String.raw(strings);
      sql.push(text);

      if (text.includes("has_bookkeeping")) {
        return [{ has_bookkeeping: true, has_deleted_at: true }];
      }

      return [{ migration_name: "20260911000200_rls_legacy_tables" }];
    },
  };

  const health = await readSchemaHealth(client);

  assert.equal(health.hasBookkeeping, true);
  assert.equal(health.hasDeletedAt, true);
  assert.deepEqual(health.unfinishedMigrations, ["20260911000200_rls_legacy_tables"]);
  assert.equal(sql.length, 2);
});

test("readSchemaHealth skips the unfinished query when the table is absent", async () => {
  let queries = 0;
  const client = {
    async $queryRaw(strings) {
      queries += 1;
      const text = String.raw(strings);

      assert.equal(text.includes("has_bookkeeping"), true);
      return [{ has_bookkeeping: false, has_deleted_at: false }];
    },
  };

  const health = await readSchemaHealth(client);

  assert.equal(queries, 1);
  assert.deepEqual(health, {
    hasBookkeeping: false,
    unfinishedMigrations: [],
    hasDeletedAt: false,
  });
});
