# User Flows

Each flow defines the happy path and the states that must be designed, implemented, and tested. Names and examples in fixtures are fictional.

## Flow 1 — First-run setup

**Entry:** A new self-hosted instance has no owner account.

1. Operator opens the one-time setup URL.
2. System verifies that setup is still allowed and displays environment health without exposing secrets.
3. Owner enters name, email, password, first business name, first branch, locale, timezone, and currency.
4. Owner reviews privacy defaults and optional integration state.
5. System creates the tenant, branch, owner membership, audit event, and recovery-code prompt in one transaction.
6. Owner enters the guided checklist: services, rooms, staff, working hours, import, first customer, first appointment.

**States:** setup already completed; database unavailable; weak password; expired setup token; partially failed transaction; loading; success.

**Recovery:** no partial tenant is left behind. A failed setup can be retried safely with the same idempotency key.

## Flow 2 — Add a customer, optionally with a sale

**Entry:** Receptionist selects **New customer** from quick actions or customer search.

1. Enter required name and optional phone/email. Contact fields are not mandatory.
2. Choose communication consent separately for WhatsApp, email, and SMS; absence of contact data disables the related consent.
3. Select services/interests from definitions and add an internal customer note.
4. System checks potential duplicates using normalized contact data and a conservative name comparison.
5. User may open an existing match, continue with justification, or merge only with permission.
6. The form asks **Was a sale made?**
7. If no, save the customer and show suggested next actions.
8. If yes, expand the sale composer: line items, service/package/product, quantity, unit price, authorized discount, staff attribution, installments, first collection, payment method, and notes.
9. Save customer, sale, package rights, payment schedule, collection, and audit entries atomically.

**Offline:** save a local pending record with an idempotency key. Clearly mark that duplicate checks and final numbering are provisional until synchronization.

**States:** blank; duplicate warning; permission denied for discount; invalid installment total; offline pending; sync conflict; successful save; server validation error.

**Invariant:** a failed sale must not leave a customer half-created unless the user explicitly chooses to save the customer without the sale.

## Flow 3 — Create and manage an appointment

**Entry:** User selects a time/resource cell, quick action, or customer activity action.

1. Choose an existing customer or create a minimal customer inline.
2. Select service or package right; the system shows duration, required resources, price context, and remaining rights.
3. Select specialist, room/device, branch, start time, duration, and optional recurrence.
4. System checks working hours, leave, overlapping staff/resource bookings, branch scope, and package eligibility.
5. User resolves conflicts or saves an authorized override with a reason.
6. Appointment appears in the resource-grid calendar with text, icon, and color status—not color alone.
7. Lifecycle actions: confirm, arrive, start service, complete, cancel, no-show, or reschedule.
8. Completion can consume a package session or minute balance and propose a collection if money is due.

**States:** calendar loading; no resources; conflict; customer has no eligible right; permission denied; offline provisional booking; canceled; no-show; completed.

**Accessibility:** resource columns and time rows have text equivalents; keyboard users can move by time slot and open the appointment details without drag-and-drop.

## Flow 4 — Quote, sale, installment, and collection

1. Start from a customer, lead, or quick sale.
2. Add service, package, product, or custom permitted line items.
3. Apply tax and discount according to policy; unauthorized discounts request owner approval instead of silently failing.
4. Save as a quote or convert to sale.
5. For a sale, choose immediate payment, installment plan, or mixed payment.
6. Validate that scheduled amounts plus immediate collections equal the sale balance.
7. Record payment method, cash register, external reference, and collector.
8. Show expected versus collected timeline and remaining debt.
9. Refunds, cancellations, and corrections create reversing entries with reason, actor, and timestamp.

**States:** empty basket; stale price; approval pending; partial payment; overdue; overpayment blocked; reversed; register closed; offline payment disabled unless deployment policy explicitly permits it.

## Flow 5 — Switch branch

1. Owner opens the persistent branch switcher.
2. System lists only branches in the current tenant and shows unsynced work before switching.
3. Owner selects a branch; the server issues a branch-scoped context and reloads branch-bound definitions, staff, rooms, customers, appointments, stock, and reports.
4. The selected branch name remains visible in the shell and every exported report.

**Permission rule:** manager, receptionist, sales, and specialist roles cannot switch branches by default. Direct URL/API access is rejected server-side.

**States:** one branch; loading; no permission; archived branch; unsynced changes; branch unavailable; successful switch.

## Flow 6 — Import legacy data

1. Owner downloads a versioned CSV/XLSX template or uploads a supported export.
2. Select entity type and branch scope.
3. Map source columns to canonical fields; save mapping as a reusable private preset.
4. Run a dry preview with normalization, duplicate detection, reference checks, and row-level errors.
5. Correct the source or explicitly exclude invalid rows.
6. Confirm import with a summary of creates, updates, skips, and potential merges.
7. Background job writes in bounded batches with an import id on every mutation.
8. Download a reconciliation report and, where safe, roll back a newly created batch.

**States:** unsupported file; encrypted workbook; ambiguous date/decimal; missing references; duplicate; canceled job; partial batch failure; completed with warnings.

**Invariant:** the original upload is access-controlled and retention-limited; secrets and raw personal data never enter application logs.

## Flow 7 — Offline work and synchronization

1. Connectivity indicator changes from online to offline with a plain-language explanation.
2. Supported actions write to an encrypted local queue with actor, branch, device, timestamp, idempotency key, and base version.
3. Unsupported high-risk actions such as permission changes and configurable payment operations are disabled with a reason.
4. When connectivity returns, the client uploads operations in dependency order.
5. Server accepts idempotent operations, rejects unauthorized/stale ones, and returns conflicts.
6. User reviews conflicts side by side and chooses a permitted resolution; no last-write-wins for financial or package-right records.
7. Completed operations leave the active queue and remain auditable on the server.

**States:** online; offline; pending count; syncing; retrying; authentication expired; conflict review; storage quota low; fully synchronized.

## Flow 8 — Guided learning

1. User selects a role-based learning path from Help.
2. The system opens a fictional demo workspace or non-destructive walkthrough.
3. Each lesson explains purpose, exact navigation, expected result, and recovery from common mistakes.
4. Completion is stored per user without exposing operational data.
5. Contextual help can open the exact relevant lesson from a form or error.

**States:** first visit; in progress; completed; content version changed; demo unavailable. Training never performs a real sale, message, deletion, or payment without a separate explicit confirmation.

