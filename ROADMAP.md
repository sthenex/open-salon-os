# OpenSalonOS Roadmap

This roadmap communicates intent, not a delivery guarantee. Security and data-integrity work may reorder features.

## Phase 0 — Public foundation (current)

- product vision, user flows, design tokens, and component contracts;
- clean-room and portable-runtime architecture decisions;
- license, governance, security policy, contribution guide, and CI;
- issue templates and an honest maintainer-application draft.

Exit criterion: a new contributor can understand the product boundary and propose a compatible change without private context.

## Phase 0.1 — Usable local core

- Docker-based local setup and demo data;
- tenant, branch, user, membership, and role enforcement;
- customer CRM with consent and activity history;
- service, staff, room, and resource definitions;
- resource-grid appointment calendar;
- import preview, validation, and reconciliation;
- accessible responsive PWA shell.

Exit criterion: a small single-branch business can create customers and run a day of appointments locally.

## Phase 0.2 — Commerce and packages

- quotations and quick sales;
- installments, collections, refunds, and cash movements;
- packages, sessions, remaining rights, and minute-based services;
- discount authorization and immutable financial audit history;
- daily sales, appointment, collection, and debt reports.

Exit criterion: sales and payment totals reconcile from source entries to the daily report.

## Phase 0.3 — Operations and resilience

- products, suppliers, warehouses, transfers, and cabin consumption;
- attendance, shifts, leave, commission, advances, and rewards;
- consent-aware WhatsApp, email, and optional SMS adapters;
- offline queue, conflict review, background synchronization, and backup restore drills;
- multi-branch comparisons and branch-specific catalogs.

Exit criterion: essential front-desk work remains available during a temporary connection loss and synchronizes safely afterward.

## Phase 1.0 — Stable self-hosted release

- documented upgrade and rollback procedures;
- threat model and external security review plan;
- accessibility audit against WCAG 2.2 AA targets;
- supported PostgreSQL deployment and object-storage adapters;
- localization framework and Turkish/English reference translations;
- stable extension interfaces and public API documentation.

## Not scheduled yet

Native mobile applications, regulated medical-record workflows, insurance billing, payroll accounting, and autonomous AI actions are outside the initial stable scope.

