-- Which of the 2026-09 security migrations are actually applied?
--
-- Read-only. Paste into Supabase -> SQL Editor and run. One row per thing the
-- new code needs; `missing` = true means the API will fail at runtime.
--
-- The important one is profiles.deleted_at: JwtAuthGuard loads the whole
-- profile row on EVERY authenticated request, so if that column is absent the
-- entire API returns 500 - not just the deletion feature.
--
-- Do not `SELECT` from `_prisma_migrations` directly. Postgres errors if the
-- relation is missing even when wrapped in `WHERE to_regclass(...) IS NOT
-- NULL`, and a missing table is the production state this file is meant to
-- detect (Prisma has never been baselined).

create or replace function pg_temp.prisma_migration_summary()
returns table(
  applied_migrations bigint,
  last_applied timestamptz,
  unfinished_migrations bigint
)
language plpgsql
as $$
begin
  if to_regclass('public._prisma_migrations') is null then
    applied_migrations := 0;
    last_applied := null;
    unfinished_migrations := 0;
    return next;
    return;
  end if;

  return query execute
    'select
       count(*)::bigint,
       max(finished_at),
       count(*) filter (where finished_at is null)::bigint
     from public._prisma_migrations';
end;
$$;

select
  item,
  case when present then 'OK' else 'MISSING' end as status,
  not present                                    as missing,
  breaks_what
from (
  values
    (
      '0. _prisma_migrations bookkeeping',
      to_regclass('public._prisma_migrations') is not null,
      'prisma migrate deploy has never run; remaining checks can still be OK if SQL was applied by hand'
    ),
    (
      '1. learning_modules.created_by_id  (20260911000000)',
      to_regclass('public.learning_modules') is not null and exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'learning_modules'
          and column_name = 'created_by_id'
      ),
      'Path/module ownership checks -> 500 on teacher curriculum edits'
    ),
    (
      '2. answer_attempts partial unique index  (20260911000500)',
      exists (
        select 1 from pg_indexes
        where schemaname = 'public'
          and indexname = 'answer_attempts_profile_question_correct_key'
      ),
      'Points race stays open (no 500; just the F-04 bug)'
    ),
    (
      '3. points_ledger ROOM_COMPLETED unique index  (20260911000500)',
      exists (
        select 1 from pg_indexes
        where schemaname = 'public'
          and indexname = 'points_ledger_room_completed_key'
      ),
      'Room bonus can double-pay (no 500)'
    ),
    (
      '4. RLS on the legacy tourism tables  (20260911000200)',
      not exists (
        select 1
        from pg_class c
        join pg_namespace n on n.oid = c.relnamespace
        where n.nspname = 'public'
          and c.relkind = 'r'
          and not c.relrowsecurity
      ),
      'Legacy tables readable with the public publishable key'
    ),
    (
      '5. profiles.deleted_at  (20260911000300)  <-- BREAKS EVERYTHING',
      exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'profiles'
          and column_name = 'deleted_at'
      ),
      'EVERY authenticated request returns 500'
    ),
    (
      '6. audit_log table  (20260911000400)',
      to_regclass('public.audit_log') is not null,
      'Admin actions fail to record (logged, not fatal)'
    )
) as checks(item, present, breaks_what)
order by item;

select
  applied_migrations,
  last_applied,
  unfinished_migrations
from pg_temp.prisma_migration_summary();
