# Product Vision

## Summary

OpenSalonOS is a privacy-first, self-hostable operations platform for salons, spas, beauty centers, and wellness studios. It connects the full service lifecycle—lead, customer, appointment, service delivery, package right, sale, payment, stock use, staff work, and reporting—without making a paid integration mandatory.

The reference product is a responsive progressive web application for front-desk computers, tablets, and phones. It must remain understandable to a first-time receptionist while preserving the controls an owner needs for finance, branches, and audit history.

## Users and context

### Business owner

Owns one or more branches. Needs consolidated reporting, branch comparison, permissions, backups, data export, and controlled branch switching. The owner is the only role allowed to switch across branches by default.

### Branch manager

Runs one assigned branch. Needs daily operations, staff state, discounts within limits, reports, and exception handling. A manager cannot view or switch to another branch unless an owner explicitly grants a separate cross-branch permission in a future policy extension.

### Receptionist

Works under time pressure. Needs rapid customer lookup, appointment creation, arrival status, collection entry, and clear next actions. Contact fields may be optional, but duplicate risk must be visible.

### Sales consultant

Tracks leads, consultations, offers, follow-ups, packages, installments, and conversions. Needs price and discount guardrails.

### Specialist

Sees assigned appointments, customer-approved service context, session rights, service notes, and minute usage. Does not automatically receive finance or unrelated customer access.

### Self-hosting operator

Deploys, updates, backs up, monitors, and restores the system. Needs documented environment variables, migrations, health checks, and failure recovery.

## Core user problems

- Customer context is fragmented across paper, spreadsheets, messages, and closed software.
- Appointments are not reliably linked to rooms, staff, packages, or remaining rights.
- Sales, expected installments, actual collections, and cash movements do not reconcile.
- Switching systems is risky because imports are opaque and exports are incomplete.
- Internet loss can stop reception work.
- Multi-branch access is often overbroad or only hidden in the interface.
- Training is difficult when the product exposes every module at once.

## Product goals

1. Create a basic customer record in under 60 seconds.
2. Create a conflict-checked appointment in under 90 seconds.
3. Reconcile each financial report total to its source entries.
4. Preserve essential drafts during a temporary network interruption.
5. Make permissions and current branch visible at the moment of action.
6. Import legacy data through preview, validation, mapping, and reconciliation.
7. Teach workflows in context with role-based learning paths and safe demo data.

## Non-goals

- Electronic health records, diagnosis, prescribing, or regulated clinical decision support.
- Payroll tax filing or full general-ledger accounting.
- Insurance claim processing.
- Autonomous AI actions that mutate customer, financial, or communication data without review.
- Pixel-for-pixel reproduction of proprietary products.

## Scope

### Initial stable scope

- tenant, branch, user, and role management;
- CRM, leads, customer history, consent, tasks, and reminders;
- service/package definitions and resource-grid appointments;
- packages, sessions, remaining rights, and minute-based service tracking;
- offers, quick sales, installments, collections, debts, refunds, and cash movements;
- products, suppliers, warehouses, transfers, stock movements, and cabin consumption;
- staff attendance, shifts, leave, advances, commissions, rewards, and assigned work;
- daily operational and management reports;
- consent-aware communication queues and provider adapters;
- bulk import/export, offline queue, audit trail, backups, and restore guidance.

### Later extensions

- public booking portal;
- advanced campaign automation;
- plugin marketplace;
- native mobile wrappers;
- accounting-system connectors.

## Experience principles

- **Reveal complexity gradually.** Show the next job, not the entire database.
- **Prevent before warning.** Detect room, staff, right, permission, and payment conflicts before save.
- **Never hide state.** Current branch, offline status, unsynced work, and permission limitations remain visible.
- **Make correction auditable.** Reverse or supersede sensitive records instead of silently overwriting history.
- **Explain every empty state.** Empty screens teach the first meaningful action.
- **Keep escape routes.** Draft, cancel, retry, export, and restore actions are explicit.

## Accessibility and devices

The target is WCAG 2.2 AA for primary workflows. All actions must be keyboard reachable; focus must remain visible; color cannot be the only status signal; forms require programmatic labels and inline error summaries. Pointer targets should be at least 44×44 CSS pixels on touch layouts. Reduced-motion preferences are respected.

Desktop supports dense scheduling and reporting. Tablet supports front desk and room-side work. Phone layouts prioritize lookup, arrivals, payment entry, assigned appointments, and guided actions rather than squeezing desktop tables into a narrow viewport.

## Success measures

- median time to first customer and appointment in a usability test;
- percentage of imports completed without unresolved rows;
- number and age of unsynced offline operations;
- report-to-ledger reconciliation accuracy;
- permission-denied events caused by unclear UI;
- support requests per completed onboarding;
- restore-drill success rate and recovery time.

