# Database recovery — 12 October 2026

Target Supabase project: `vqaephcaeqfpmufalqtd` (ap-south-1). The user selected this fresh project and authorized use of Render workspace `tea-d66g5l0gjchc73d9fu7g`.

## Completed

- Applied all seven repository Prisma migrations through Supabase in one schema recovery migration. Recorded their original SHA-256 checksums in `_prisma_migrations` so future Prisma deploys recognize the applied schema.
- Set `private.set_updated_at()` to an empty search path; SQL is in `backend/prisma/manual/harden_updated_at.sql`.
- Imported the 38 accessible Markdown rooms from the supplied Google Drive folder: 2 paths, 13 populated modules and 99 tasks. Another 13 module folders were empty.
- Saved source texts without instructor answer keys under `backend/prisma/seed-data/drive/`; `manifest.json` preserves Drive IDs, URLs and module mapping.
- Saved replayable SQL in `backend/prisma/manual/seed_drive_content.sql`. Replays update matching rooms/tasks without deleting task IDs or learner progress.
- Imported lesson questions remain Markdown in task bodies. Machine-graded questions, accepted answers and XP were not invented; these rooms/tasks currently carry zero XP.
- Verified all 18 public tables have RLS, all seven Prisma migrations are finished, and published task bodies contain no answer-key headings. The advisor reports only informational notices about absent RLS policies, as expected for this backend-only access design.

## Deployment status

Render environment variables were updated after the user supplied the new connection URLs in ignored `backend/.env`. Reserved password characters were percent-encoded and runtime pool settings were added. No password was logged or committed. Deploy `dep-db6f98942hec73c1o0vg` became live at 18:55 Asia/Baku on 12 October 2026. Its boot logs confirmed `Connected to Postgres` and `Prisma migrations are finished; required schema is present`. The explicit follow-up deploy `dep-db6f9avgfhjc73fc1420` was queued by a separate deploy request; it uses the same commit and configuration.

Vercel project access still returns HTTP 403. Its environment update, frontend rebuild, Auth redirect configuration and end-to-end login verification remain pending.

Vercel project: `prj_v3DLvefi1OXR8hku6Z5LL9wrvcpC` (`kiber-edu-az`), team `team_0v6lHGoLxFa2gYDEY0vi3ig3`. Project details returned HTTP 403 for `sixis-projects-05eeda55`. The connected credentials must have access to this team/project before changing its environment.

Ignored `frontend/.env.production.local` contains the new public Supabase URL/key and the Render API URL. These are prepared values, not applied Vercel settings. Update the corresponding Vercel production variables and rebuild after resolving project access. Configure the new Supabase Auth Site URL and allowed `/auth/callback` redirect using the verified Vercel production domain.

A direct HTTP health fetch was unavailable in this execution environment. Render live status and successful database boot logs were verified. Verify login, catalog visibility and a room page after the Vercel environment update; end-to-end verification is pending. No existing accounts or progress were restored; the target's `auth.users` was empty.
