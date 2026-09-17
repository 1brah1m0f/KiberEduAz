-- Who did what to whom, for the privileged actions: teacher approval and
-- rejection, room publish/unpublish/archive, role changes, curriculum
-- deletions, account restore and purge. Append-only by convention; nothing in
-- the API updates or deletes a row.
--
-- actor_id is nullable with ON DELETE SET NULL so an admin's own account can be
-- purged without taking their history with it, and so the scheduler (no
-- actor) can write rows too.
--
-- Idempotent: CREATE TABLE / INDEX IF NOT EXISTS so a hand-applied schema
-- does not block a later prisma migrate deploy.
CREATE TABLE IF NOT EXISTS "audit_log" (
  "id"          UUID        NOT NULL DEFAULT gen_random_uuid(),
  "actor_id"    UUID,
  "action"      TEXT        NOT NULL,
  "target_type" TEXT        NOT NULL,
  "target_id"   UUID,
  "metadata"    JSONB       NOT NULL DEFAULT '{}'::jsonb,
  "created_at"  TIMESTAMPTZ(6) NOT NULL DEFAULT now(),

  CONSTRAINT "audit_log_pkey" PRIMARY KEY ("id")
);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'audit_log_actor_id_fkey'
  ) THEN
    ALTER TABLE "audit_log"
      ADD CONSTRAINT "audit_log_actor_id_fkey"
      FOREIGN KEY ("actor_id") REFERENCES "profiles"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "audit_log_created_at_idx" ON "audit_log" ("created_at" DESC);
CREATE INDEX IF NOT EXISTS "audit_log_actor_id_idx" ON "audit_log" ("actor_id");
CREATE INDEX IF NOT EXISTS "audit_log_target_type_target_id_idx"
  ON "audit_log" ("target_type", "target_id");

ALTER TABLE "audit_log" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON "audit_log" FROM anon, authenticated;
