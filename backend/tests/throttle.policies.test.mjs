import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  ANSWER_THROTTLE,
  CREATE_PATH_THROTTLE,
  CREATE_ROOM_THROTTLE,
  REQUEST_TEACHER_THROTTLE,
} from "../src/common/throttle.policies.ts";

function readSrc(relativePath) {
  return readFileSync(new URL(relativePath, import.meta.url), "utf8");
}

test("sensitive writes are tighter than the global 120/min bucket", () => {
  assert.deepEqual(ANSWER_THROTTLE, { default: { ttl: 60_000, limit: 30 } });
  assert.deepEqual(CREATE_ROOM_THROTTLE, { default: { ttl: 60_000, limit: 10 } });
  assert.deepEqual(CREATE_PATH_THROTTLE, { default: { ttl: 60_000, limit: 10 } });
  assert.deepEqual(REQUEST_TEACHER_THROTTLE, { default: { ttl: 3_600_000, limit: 3 } });
});

test("the global 120/min limit is still in place", () => {
  const appModule = readSrc("../src/app.module.ts");

  assert.match(appModule, /ThrottlerModule\.forRoot\(\[\{ ttl: 60_000, limit: 120 \}\]\)/);
});

test("the four flood-prone routes bind the per-route policies", () => {
  const progress = readSrc("../src/progress/progress.controller.ts");
  const rooms = readSrc("../src/catalog/rooms.controller.ts");
  const paths = readSrc("../src/catalog/paths.controller.ts");
  const profiles = readSrc("../src/profiles/profiles.controller.ts");

  assert.match(progress, /@Throttle\(ANSWER_THROTTLE\)\s*\n\s*@Post\('questions\/:questionId\/answer'\)/);
  assert.match(rooms, /@Throttle\(CREATE_ROOM_THROTTLE\)\s*\n\s*@Roles\(UserRole\.TEACHER, UserRole\.ADMIN\)\s*\n\s*create\(/);
  assert.match(paths, /@Throttle\(CREATE_PATH_THROTTLE\)\s*\n\s*@Roles\(UserRole\.TEACHER, UserRole\.ADMIN\)\s*\n\s*create\(/);
  assert.match(profiles, /@Throttle\(REQUEST_TEACHER_THROTTLE\)\s*\n\s*@Post\('me\/request-teacher'\)/);
});

test("trust proxy stays set so one client cannot fill everyone else's bucket", () => {
  const main = readSrc("../src/main.ts");

  assert.match(main, /app\.set\('trust proxy', 1\)/);
});
