# ADR 0002: Portable domain and runtime adapters

- Status: Accepted
- Date: 2026-11-05

## Context

The project should run locally, on a conventional server, and eventually on selected edge platforms. Coupling business rules directly to one database or cloud API would make self-hosting and testing difficult.

## Decision

Use a TypeScript monorepo with a framework-independent domain package. The reference web client is a React PWA, the portable API layer uses Hono-compatible web primitives, and the reference database is PostgreSQL. Repositories, object storage, queues, messaging, and AI providers are interfaces implemented by adapters.

Cloudflare D1/R2 or other runtimes may be supported as explicit deployment profiles with conformance tests and documented limitations. They do not define the canonical domain model.

## Consequences

- Domain tests run without network or provider SDKs.
- New infrastructure requires adapter conformance rather than business-rule rewrites.
- Some features need capability detection across deployment profiles.
- The additional interface layer is accepted in exchange for portability and clearer security boundaries.

