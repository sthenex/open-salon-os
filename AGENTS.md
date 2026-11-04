# Instructions for coding agents

These rules apply to every file in this repository.

1. Read `README.md`, `CONTRIBUTING.md`, and relevant architecture decisions before changing behavior.
2. Never add real customer data, credentials, private screenshots, proprietary code, or copied product assets.
3. Keep domain rules in `packages/core`; isolate providers in adapters.
4. Enforce tenant, branch, and role access on the server. UI visibility is not authorization.
5. Treat money, package rights, stock, attendance, and audit history as integrity-sensitive domains.
6. Add tests for behavior and permission boundaries. Update documentation for workflow or schema changes.
7. Use deterministic fixtures with fictional names and contact details.
8. Avoid hidden network calls. AI, analytics, and messaging integrations must be opt-in.
9. Keep pull requests focused and run `npm run check` before handing off.
10. If a requirement risks privacy or irreversible data loss, stop and document the trade-off before implementation.

