# Security Policy

OpenSalonOS handles sensitive operational data. Security reports are treated as a first-class maintenance responsibility.

## Supported versions

Until the first stable release, security fixes target the latest commit on `main`. After `1.0`, this table will list supported release lines.

## Reporting a vulnerability

Do not open a public issue. Use GitHub's **Report a vulnerability** flow under the repository Security tab to submit a private advisory. Include:

- affected version or commit;
- reproduction steps or a minimal proof of concept;
- expected impact;
- suggested mitigation, if known.

Do not access, modify, download, or retain data that does not belong to you. Test only against systems and accounts you control.

We aim to acknowledge a complete report within 5 business days, provide a triage decision within 10 business days, and coordinate disclosure after a fix is available. These are targets, not a warranty.

## High-priority areas

- tenant and branch isolation;
- role and permission escalation;
- authentication and session handling;
- import/export and backup authorization;
- offline synchronization and replay protection;
- payment, refund, discount, and stock mutations;
- stored content and file-upload handling;
- secrets in integration adapters;
- personal-data exposure in logs, analytics, or AI requests.

## Deployment responsibility

Self-hosters are responsible for TLS, database access controls, secrets management, backups, patching, and monitoring. Reference deployment documentation will ship secure defaults, but operators must review them for their environment.

