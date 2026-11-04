# OpenSalonOS

Privacy-first, self-hostable operations software for salons, spas, beauty centers, and wellness studios.

[![Quality](https://github.com/sthenex/open-salon-os/actions/workflows/quality.yml/badge.svg)](https://github.com/sthenex/open-salon-os/actions/workflows/quality.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-design%20preview-c89b4b.svg)](ROADMAP.md)

OpenSalonOS is being designed as an open, auditable alternative to closed salon-management platforms. It will combine customer relationships, room-based scheduling, packages and sessions, sales, installments, collections, inventory, staff operations, multi-branch reporting, consent-aware messaging, and offline-first field work.

## Why this project exists

Small service businesses are often trapped between spreadsheets and expensive closed platforms. Their data is difficult to export, their workflows are hard to customize, and an internet interruption can stop front-desk work. OpenSalonOS aims to provide:

- **Data ownership:** documented exports, backups, and migration paths.
- **Self-hosting:** a Docker-first reference deployment with optional managed adapters.
- **Operational depth:** appointments are linked to customers, services, staff, rooms, packages, sales, and payments.
- **Offline resilience:** customer and appointment drafts survive network loss and synchronize safely.
- **Privacy by design:** consent, tenant isolation, least-privilege access, and audit history are core features.
- **Provider independence:** messaging, storage, database, and AI integrations live behind adapters.

## Product principles

1. The first customer record should take under 60 seconds.
2. A receptionist should see only the branch and actions they are assigned.
3. Financial history is corrected with reversing entries, never silent deletion.
4. Every bulk import is previewed, validated, and reconciled.
5. Optional AI features must never send customer data without explicit configuration and disclosure.
6. The core product remains useful without any paid third-party API.

## Planned modules

| Area | Scope |
| --- | --- |
| Customer CRM | Profiles, consent, notes, interactions, groups, leads, tasks |
| Scheduling | Day/resource grid, services, staff, rooms, conflicts, status history |
| Commerce | Quotes, sales, discounts, packages, installments, collections, refunds |
| Service delivery | Session rights, remaining balance, minute-based treatments, receipts |
| Inventory | Products, suppliers, purchase orders, stock, cabin consumption, transfers |
| Workforce | Accounts, branch roles, shifts, attendance, leave, commissions, advances |
| Communication | WhatsApp, email, templates, delivery tracking, campaign consent |
| Reporting | Daily close, cash, sales, collections, appointments, stock, audit logs |
| Platform | Multi-tenant, multi-branch, offline queue, imports, exports, backups, audit |

## Current status

The repository is in its public design phase. The product boundary, workflows, architecture, accessibility rules, and contribution process are being finalized before the first implementation milestone. See the [roadmap](ROADMAP.md) and [product vision](docs/product/vision.md).

## Repository map

```text
apps/
  web/                 React PWA and operator interface
  api/                 Portable Hono HTTP API
packages/
  core/                Framework-independent domain rules
  db/                  Repository contracts and migrations
  ui/                  Accessible design-system components
  adapters/            Database, messaging, storage, and AI adapters
docs/
  product/             User flows, components, and design decisions
  architecture/        Runtime, data, security, and extension boundaries
  maintainers/         Release and program application material
```

## Who this is for

- Salon and wellness operators who need control over their own data.
- Developers building regional or vertical-specific salon products.
- Integrators migrating businesses away from legacy desktop software.
- Contributors interested in offline-first business software and resource scheduling.

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md), then choose an issue labeled `good first issue` or join a design discussion. Product decisions are recorded publicly as ADRs. Security reports must follow [SECURITY.md](SECURITY.md), not public issues.

## Non-goals

- OpenSalonOS is not a medical record or diagnostic system.
- It will not clone proprietary source code, branding, assets, or confidential datasets.
- It will not hide export functionality behind a commercial license.

## License

Apache License 2.0. See [LICENSE](LICENSE).

