# Canonical Data Model

This is a conceptual model. Physical schemas and indexes will be introduced through reviewed migrations.

## Identity and organization

- **Tenant:** legal/operational organization boundary, locale, timezone, currency, status.
- **Branch:** tenant-owned location, working hours, status, contact metadata.
- **User:** authenticated identity; personal profile is separate from staff employment data.
- **Membership:** user-to-tenant relationship and status.
- **Role / Permission / Assignment:** capabilities constrained to tenant and optional branch scope.

Invariant: a branch belongs to exactly one tenant. A request cannot use a membership from one tenant to access another.

## CRM

- **Lead:** source, owner, stage, interest, next action, conversion link.
- **Customer:** display identity, optional normalized phone/email, branch affinity, lifecycle status.
- **Consent:** channel, purpose, status, captured source, timestamp, evidence, withdrawal.
- **CustomerNote:** typed internal note with author, branch, visibility, and timestamp.
- **CustomerTask:** assignee, due time, status, outcome.
- **CustomerActivity:** timeline projection that references source records instead of duplicating truth.

Contact data is optional. Uniqueness rules must not reject legitimate shared phone numbers; duplicate detection produces evidence and review, not automatic merges.

## Catalog and resources

- **Service:** duration, price policy, required skills/resources, active period.
- **PackageDefinition / PackageItem:** bundle of services, sessions or minute allowances, expiry policy.
- **Product:** SKU/barcode, sales and stock properties.
- **StaffProfile:** branch assignments, skills, working rules.
- **Resource:** room, cabin, device, or other capacity-constrained asset.
- **PriceList:** tenant/branch scope, currency, validity range, catalog prices.

Definitions are retired rather than deleted when referenced historically.

## Scheduling and service delivery

- **Appointment:** customer, branch, start/end, status, source, notes, version.
- **AppointmentItem:** service/package link, duration, assigned staff/resource.
- **Availability / Shift / Leave:** rules and exceptions used by conflict checks.
- **ServiceExecution:** actual start/end, specialist, outcome, approved note.
- **Entitlement:** customer-owned package/session/minute balance and expiry.
- **EntitlementMovement:** grant, consume, reverse, expire, transfer with source reference.

Invariant: overlapping use of an exclusive resource is rejected unless a permissioned override records its reason. Entitlement balance is derived from movements.

## Commerce and cash

- **Quote / QuoteLine:** versioned offer before conversion.
- **Sale / SaleLine:** immutable commercial snapshot of descriptions, prices, tax, discounts, attribution.
- **Installment:** expected amount and due date.
- **Payment:** received/refunded amount, method, register, external reference.
- **PaymentAllocation:** links payments to installments or sale balance.
- **CashRegister / CashMovement:** operational cash inflow/outflow and shift state.
- **Approval:** requested action, threshold, requester, approver, decision.

Money uses integer minor units plus ISO currency. Totals are recalculated server-side. Posted financial entries are reversed, never silently edited or deleted.

## Inventory and assets

- **Warehouse / StockLocation:** branch-scoped storage or cabin location.
- **StockMovement:** receive, sell, consume, transfer, adjust, reverse.
- **Supplier / Purchase / PurchaseLine:** procurement records.
- **ConsumptionRecipe:** expected consumables per service.
- **Asset / Assignment:** device, fixture, serial, maintenance, custody.

Stock balance is derived from movements. Transfers contain paired source and destination movements in one transaction.

## Workforce

- **AttendanceEvent:** clock in/out with source and correction history.
- **WorkSession:** derived duration with approved adjustments.
- **CommissionRule / CommissionEntry:** versioned rule and resulting auditable entry.
- **Advance / Reward / Deduction:** operational staff ledger entries; not a replacement for payroll accounting.

## Communications

- **Template:** versioned, channel-specific content and variables.
- **AudienceSnapshot:** authorized recipients and consent decision at send time.
- **MessageJob / MessageDelivery:** queue state, provider reference, delivery result, failure class.
- **Campaign:** purpose, schedule, audience rule, content approval, conversion attribution.

No recipient enters a provider queue without a valid channel address, purpose-compatible consent, and tenant authorization.

## Platform integrity

- **AuditEvent:** actor, scope, action, entity, reason, redacted change summary.
- **OutboxEvent:** transactional event awaiting delivery.
- **IdempotencyRecord:** request key, actor/scope, result fingerprint, expiry.
- **ImportBatch / ImportRow:** mapping, validation, result, reconciliation.
- **SyncOperation / SyncConflict:** offline command state and resolution.
- **BackupRecord:** artifact metadata, encryption state, verification, retention, restore drill.

All primary records use opaque stable identifiers, creation/update timestamps, and an optimistic concurrency version where mutable.

