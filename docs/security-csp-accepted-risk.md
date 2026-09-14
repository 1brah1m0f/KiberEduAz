# CSP inline-style accepted risk

**Status:** Accepted  
**Decision date:** 2026-09-14  
**Scope:** Frontend Content Security Policy

## Context

KiberEduAz sends a per-request, nonce-based Content Security Policy from
`frontend/src/proxy.ts`. Script execution is restricted by a unique nonce and
`'strict-dynamic'`; the policy is enforced with the
`Content-Security-Policy` response header.

The UI currently uses Tailwind-generated styles and Framer Motion. Some
components set HTML `style` attributes at runtime. A CSP nonce authorizes
`<style>` elements but does not authorize style attributes, so removing
`'unsafe-inline'` from `style-src` would cause visual and animation regressions
without a broader styling migration.

## Decision

Retain the following directive for now:

```text
style-src 'self' 'unsafe-inline'
```

This exception applies only to styles. `script-src` does not contain
`'unsafe-inline'` and remains protected by a per-request nonce and
`'strict-dynamic'`.

## Risk and mitigations

Allowing inline styles can permit CSS injection if an attacker first finds a
markup or style injection path. It does not permit JavaScript execution under
the current script policy. The residual risk is accepted as low because:

- React escapes interpolated text by default;
- raw HTML rendering is not enabled for Markdown content;
- inline scripts are blocked unless trusted by the request nonce;
- `object-src 'none'`, `frame-ancestors 'none'`, and `base-uri 'self'` reduce
  related injection impact.

## Review triggers

Revisit this decision when any of the following happens:

- the animation or styling stack gains reliable nonce support for every
  generated style and style attribute;
- untrusted rich HTML or user-authored styling is introduced;
- a penetration test demonstrates a practical CSS injection path;
- browser support makes a stricter alternative such as CSP hashes practical
  for the complete frontend.

Any attempt to remove `'unsafe-inline'` must include visual smoke tests across
the public pages, authentication screens, Room experience, dashboards, and
KiberBot.
