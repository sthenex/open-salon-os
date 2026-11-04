# Component Specifications

These contracts describe behavior and state, not a framework implementation. Components must use the tokens in [design-tokens.md](design-tokens.md).

## Application shell

**Purpose:** Keep identity, branch, navigation, connectivity, quick actions, help, and account state stable across workflows.

**Anatomy:** skip link; product mark; branch context; primary navigation grouped by job; quick action trigger; offline/sync state; help; account menu; main-content landmark.

**Variants:** expanded desktop rail; compact desktop rail; tablet drawer; phone bottom navigation plus More sheet.

**States:** normal; offline; unsynced operations; read-only maintenance; account session expiring; impersonation/support mode if later introduced.

**Responsive behavior:** navigation becomes an overlay below `64rem`. Opening it traps focus; closing returns focus to the trigger. The content must never create horizontal page scrolling at 320 CSS pixels.

**Accessibility:** semantic navigation labels, visible current-page state, keyboard shortcuts documented and disableable, 44×44 touch targets.

## Branch switcher

**Purpose:** Let authorized owners change operational context without mistaking one branch's data for another.

**Content:** current branch, tenant name, search, branch status, unsynced count, last sync time.

**States:** loading; one branch; many branches; archived; unavailable; forbidden; pending local work.

**Behavior:** managers and staff see a non-interactive branch label. Owners must confirm when unsynced operations exist. Context is revalidated by the server; cached staff, room, catalog, stock, and report queries are invalidated after switch.

**Testing:** direct API request with an unauthorized branch id returns a denial; keyboard selection works; exported reports contain the selected branch.

## Customer composer

**Purpose:** Create a customer quickly without losing access to detailed CRM or optional sale creation.

**Sections:** identity; optional contact; consent; service interests; note; duplicate results; **Was a sale made?** disclosure; sale composer; review.

**Variants:** full page; compact dialog; inline appointment creation; import correction.

**States:** pristine; editing; checking duplicate; likely duplicate; offline provisional; validation errors; save in progress; saved; partial failure recovery.

**Rules:** name is required; phone and email are optional; consent controls require corresponding contact data; normalized values never overwrite user-visible formatting; duplicate merge requires permission.

**Accessibility:** errors summarized at top and linked to fields; disclosure state announced; no placeholder-only labels.

## Resource-grid calendar

**Purpose:** Show time vertically and staff/room/device resources horizontally for rapid appointment planning.

**Anatomy:** date controls; branch/timezone; filters; resource headers; time ruler; appointment blocks; current-time marker; availability overlay; details drawer.

**Variants:** day resource grid; week agenda; accessible table/list fallback; phone agenda.

**States:** loading skeleton; empty; filtered empty; partial data; conflict; offline provisional entries; read-only.

**Behavior:** appointment presence is communicated with a filled block, customer/service text, status icon, and accessible label. Dragging is optional; every drag action has an equivalent edit form. Overlaps are visually offset and programmatically described.

**Performance:** virtualize large resource sets without dropping keyboard focus. Preserve scroll position when an appointment drawer closes.

## Sale composer

**Purpose:** Build quotes and sales while keeping totals, authorization, installments, and collections consistent.

**Anatomy:** customer context; searchable catalog; line-item table; custom line item; discount/tax; attribution; total summary; installment builder; collection form; notes; review footer.

**States:** empty; calculating; stale catalog; approval required; invalid schedule; collecting; saved; reversed; offline restricted.

**Rules:** decimal input is locale-aware but persisted as integer minor units. Server recalculates totals. A client total is never trusted. Removing a paid sale is replaced by a cancellation/refund workflow.

**Accessibility:** table has row and column headers; total changes are politely announced; destructive or reversing actions state consequences before confirmation.

## Offline sync indicator

**Purpose:** Make connectivity and data durability understandable without alarming users.

**Variants:** compact status in shell; detailed sync center; blocking storage warning.

**States:** online; offline; pending; syncing; retry scheduled; authentication required; conflicts; storage quota risk; synchronized.

**Behavior:** shows exact pending count and last successful sync. Clicking opens operation-level details without exposing sensitive payloads. Users can retry safe operations and open conflict resolution.

**Accessibility:** status text and icon accompany color; updates use a non-interrupting live region except when local storage is at immediate risk.

## Import workbench

**Purpose:** Turn legacy files into auditable, reversible batches.

**Anatomy:** upload; entity and branch scope; column map; transform preview; row errors; duplicate decisions; batch summary; progress; reconciliation download.

**States:** waiting; parsing; mapping; validating; ready; importing; paused; failed; completed with warnings; rolled back.

**Behavior:** no import starts automatically after upload. Sample values are masked where possible. Every error includes row, field, cause, and remediation. Large jobs continue server-side after navigation.

## Guided learning panel

**Purpose:** Teach the product in the user's language and role, from the screen where the question occurs.

**Content:** lesson objective; estimated time; steps; screenshot/diagram placeholder; common mistakes; safe practice action; completion.

**States:** recommended; in progress; completed; outdated after product change; demo-only.

**Rule:** help text must name the exact menu and button labels in the current version. The optional AI assistant retrieves from versioned public help content and cites the lesson; it does not invent permissions or perform mutations.

