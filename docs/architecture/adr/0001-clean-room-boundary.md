# ADR 0001: Clean-room product boundary

- Status: Accepted
- Date: 2026-11-05

## Context

Salon operations products share common workflows, while existing products may contain proprietary source code, visual assets, confidential documentation, customer databases, and protected branding. OpenSalonOS must be independently maintainable and safe to publish.

## Decision

OpenSalonOS is designed from original requirements, public standards, and independently written code. Contributors must not copy proprietary source, private assets, non-public documentation, database contents, credentials, or distinctive screen implementations.

Competitive research may identify high-level user needs and interoperability requirements. Those needs must be rewritten as original, provider-neutral acceptance criteria before implementation. Real business exports are used only in private, authorized migration work and must never enter this repository.

## Consequences

- The project can explain the origin of its architecture and workflows.
- Public fixtures remain fictional and non-identifying.
- Migration adapters target documented formats or user-supplied mappings, not bundled proprietary schemas.
- A feature may behave differently from a closed product when accessibility, safety, privacy, or maintainability requires it.

