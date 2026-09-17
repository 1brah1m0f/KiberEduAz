-- Soft delete for data-subject deletion requests (F-09). A deleted account is
-- marked, not erased: it stops authenticating immediately, and the row plus
-- everything cascading off it is purged after the restore window.
--
-- Nullable, so every existing profile is "not deleted" without a backfill.
-- Idempotent: if this column is missing, every authenticated API request 500s.
ALTER TABLE "profiles"
  ADD COLUMN IF NOT EXISTS "deleted_at" TIMESTAMPTZ(6);

CREATE INDEX IF NOT EXISTS "profiles_deleted_at_idx"
  ON "profiles" ("deleted_at")
  WHERE "deleted_at" IS NOT NULL;
