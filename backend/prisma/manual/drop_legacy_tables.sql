-- Leftovers from the unrelated previous project on this Supabase instance.
-- All seven were verified empty (0 rows) on 2026-08-11 before the
-- KiberEduAz schema was installed alongside them.
--
-- Run this only after:
--   1. a backup / PITR restore drill has succeeded
--   2. the Data API is disabled (Settings -> API) so a missed table cannot
--      be read with the publishable key
--   3. confirming nothing still depends on them

drop table if exists public."CoinTransaction" cascade;
drop table if exists public."Review" cascade;
drop table if exists public."Booking" cascade;
drop table if exists public."Place" cascade;
drop table if exists public."EntrepreneurProfile" cascade;
drop table if exists public."TouristProfile" cascade;
drop table if exists public."User" cascade;
