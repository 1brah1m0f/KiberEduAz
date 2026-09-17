import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { buildCsp, CSP_HEADER } from "../src/lib/security/csp.ts";

test("CSP is enforced, not report-only", () => {
  assert.equal(CSP_HEADER, "Content-Security-Policy");
  assert.notEqual(CSP_HEADER, "Content-Security-Policy-Report-Only");
});

test("scripts are nonced and styles keep the documented unsafe-inline exception", () => {
  const policy = buildCsp("test-nonce");

  assert.match(policy, /script-src[^;]*'nonce-test-nonce'/);
  assert.match(policy, /'strict-dynamic'/);
  assert.doesNotMatch(policy, /script-src[^;]*'unsafe-inline'/);
  assert.match(policy, /style-src 'self' 'unsafe-inline'/);
});

test("the style-src exception is recorded as an accepted risk", () => {
  const adr = readFileSync(new URL("../../docs/security-csp-accepted-risk.md", import.meta.url), "utf8");

  assert.match(adr, /style-src 'self' 'unsafe-inline'/);
  assert.match(adr, /Accepted/);
});

test("next.config.ts does not send a second CSP that would intersect the nonce", () => {
  const config = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");

  assert.doesNotMatch(config, /Content-Security-Policy/);
});
