# Architecture Overview

## Goals

OpenSalonOS must be self-hostable, portable across infrastructure providers, resilient to temporary network loss, and strict about tenant/branch boundaries. The domain should remain useful without paid messaging or AI services.

## System shape

```text
Browser / installed PWA
  ├─ accessible operator interface
  ├─ IndexedDB draft + operation queue
  └─ service worker / sync coordinator
              │ HTTPS
              ▼
Portable HTTP API
  ├─ authentication and session boundary
  ├─ tenant / branch / role authorization
  ├─ domain application services
  ├─ audit + transactional outbox
  └─ import / export / background jobs
       │               │
       ▼               ▼
PostgreSQL          Object storage
       │
       ▼
Optional adapters: WhatsApp, email, SMS, AI, accounting, webhooks
```

## Planned monorepo

- `apps/web`: React-based responsive PWA and operator interface.
- `apps/api`: Hono-based HTTP application and deployment entry points.
- `packages/core`: framework-independent entities, policies, value objects, and use cases.
- `packages/db`: repository contracts, PostgreSQL implementation, migrations, and fixtures.
- `packages/ui`: accessible components, tokens, and interaction tests.
- `packages/adapters`: provider integrations behind explicit interfaces.

The first reference deployment uses PostgreSQL and S3-compatible object storage through Docker Compose. Edge profiles such as Cloudflare D1/R2 may be provided as adapters, but infrastructure constraints must not leak into domain rules.

## Boundaries

### Domain core

Contains customer, scheduling, commerce, package rights, inventory, workforce, communication consent, and audit policies. It does not import web frameworks or provider SDKs.

### Application services

Coordinate authorization, transactions, idempotency, repositories, and outbox events. Each command carries tenant, branch, actor, and request identity.

### Adapters

Translate provider APIs into stable interfaces. Provider failures cannot mutate domain state as if delivery succeeded. Delivery receipts are processed idempotently.

### Web client

Treats server responses as authoritative. Cached data improves continuity but never expands permissions. High-risk actions can be disabled offline by deployment policy.

## Authorization

Every branch-owned row carries a tenant id and branch id where appropriate. Requests derive allowed tenant and branch scopes from server-side membership, never from a trusted client field. Repository queries require scope explicitly; unscoped list functions are prohibited in application code.

Default roles are owner, manager, receptionist, sales, and specialist. Capabilities are permission-based internally so deployments may add constrained custom roles later. Only owners receive cross-branch switching by default.

## Offline and synchronization

The browser stores supported commands, not arbitrary database rows. Each operation contains an idempotency key, base version, actor, branch, dependencies, and local timestamp. The server applies commands transactionally and returns accepted versions or typed conflicts.

Last-write-wins is not used for money, stock, package rights, attendance, or audit records. Conflicts in these domains require a safe domain action or human review.

## Audit and events

Sensitive commands append an audit record containing actor, scope, action, entity reference, reason where required, and before/after summaries with field-level redaction. Domain changes and outbox events commit in the same transaction. Consumers may retry safely.

Audit history is not an analytics dump and must not store raw secrets, message bodies unnecessarily, or entire uploaded files.

## Imports and background work

Imports are staged, validated, and applied in bounded batches. Each mutation references an import batch. Long jobs expose progress and reconciliation results. Object uploads use short-lived access and retention policies.

## Security and observability

- structured logs with request and trace ids, never raw credentials or unrestricted personal data;
- health/readiness endpoints that disclose no secrets;
- metrics for queue age, sync conflicts, failed deliveries, import errors, and backup age;
- dependency and secret scanning in CI;
- rate limiting and abuse controls at authentication, import, export, and messaging boundaries.

## Deployment profiles

1. **Local evaluation:** Docker Compose, fictional seed data, local object storage.
2. **Single-node production:** reverse proxy, API/web, PostgreSQL, object storage, worker, scheduled backups.
3. **Managed production:** separately scalable API/workers and managed PostgreSQL/object storage.
4. **Optional edge profile:** provider-specific adapters with documented capability differences.

No deployment profile may weaken tenant isolation or silently disable audit behavior.

