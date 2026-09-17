-- Learning modules had no author column, so there was nothing to check
-- ownership against. Nullable on purpose: rows created before this migration
-- keep created_by_id = NULL and stay admin-only, which is the safe default.
--
-- Idempotent: production received the original schema by hand, so this may
-- run against a database that already has the column.
ALTER TABLE "learning_modules"
  ADD COLUMN IF NOT EXISTS "created_by_id" UUID;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'learning_modules_created_by_id_fkey'
  ) THEN
    ALTER TABLE "learning_modules"
      ADD CONSTRAINT "learning_modules_created_by_id_fkey"
      FOREIGN KEY ("created_by_id") REFERENCES "profiles"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "learning_modules_created_by_id_idx"
  ON "learning_modules"("created_by_id");
