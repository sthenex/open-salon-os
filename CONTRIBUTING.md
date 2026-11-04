# Contributing to OpenSalonOS

Thank you for helping build an open, privacy-conscious operations platform for service businesses.

## Before you start

- Search existing issues and discussions before opening a new one.
- Use a feature request for product ideas and a bug report for reproducible defects.
- For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
- Do not include real customer, employee, payment, health, or appointment data in issues, fixtures, screenshots, or commits.

## Development workflow

1. Fork the repository and create a focused branch from `main`.
2. Keep domain behavior separate from provider-specific adapters.
3. Add or update tests for behavioral changes.
4. Update documentation when a workflow, permission, API, or migration changes.
5. Run `npm run check` before opening a pull request.
6. Complete the pull-request checklist and explain any trade-offs.

Prefer small pull requests that solve one problem. Larger proposals that change architecture, authorization, data ownership, or offline synchronization should start as an issue or architecture decision record.

## Commit and pull-request guidance

Use clear, imperative commit messages, for example:

```text
Add branch-scoped customer search
Prevent overlapping room reservations
Document payment reversal workflow
```

Pull requests should describe:

- the user problem;
- the chosen behavior;
- permissions and tenant/branch boundaries;
- data migration or rollback needs;
- test evidence and screenshots when UI changes.

## Product and security rules

- Authorization is enforced on the server; hidden UI is not a security boundary.
- Money is stored in integer minor units with an explicit currency.
- Financial records are reversed or corrected with auditable entries, not silently deleted.
- Imports must support dry-run validation and a reconciliation report.
- Offline writes require idempotency keys and visible conflict handling.
- Optional AI and messaging integrations stay disabled until explicitly configured.
- New dependencies must have a compatible license and a clear maintenance purpose.

## Clean-room boundary

OpenSalonOS is not a copy of any proprietary product. Contributions must not contain proprietary source code, private assets, confidential documentation, credentials, or customer data. Feature ideas may be expressed as original requirements and independently implemented. See [ADR 0001](docs/architecture/adr/0001-clean-room-boundary.md).

## License

By submitting a contribution, you agree that it may be distributed under the repository's [Apache License 2.0](LICENSE).

