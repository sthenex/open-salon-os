# OpenAI Codex for Open Source — Application Draft

This document is a truthful working draft. Replace placeholders with current public evidence before submitting. Do not claim users, contributors, releases, or adoption that the project does not yet have.

## Project

- **Name:** OpenSalonOS
- **Repository:** https://github.com/sthenex/open-salon-os
- **License:** Apache-2.0
- **Category:** Self-hosted operations software for salons, spas, beauty centers, and wellness studios

## Short description

OpenSalonOS is a privacy-first, self-hostable platform connecting customer CRM, resource-based appointments, services and packages, sales and installments, collections, inventory, staff operations, consent-aware communication, multi-branch reporting, and offline synchronization. Its portable architecture keeps essential functionality independent from paid AI, messaging, and cloud providers.

## Why it matters

Small service businesses often choose between spreadsheets and closed software that is difficult to export, customize, or operate during an internet outage. OpenSalonOS aims to provide a transparent data model, documented migration paths, auditable financial corrections, strict branch permissions, and a Docker-first reference deployment that the community can inspect and extend.

## Maintainer responsibilities

The maintainer currently owns product design, architecture, implementation, migration safety, documentation, issue triage, releases, security response, and contributor onboarding. As the community grows, governance defines how reviewer and maintainer responsibilities are shared.

## How Codex would help

- turn documented user flows into small reviewable implementation pull requests;
- generate and expand permission-boundary, migration, and offline-conflict tests;
- review repetitive adapter and schema work while maintainers focus on domain decisions;
- reproduce and triage issues against fictional fixtures;
- keep public API, upgrade, release, and operator documentation synchronized;
- assist security hardening and remediation after maintainer review;
- help first-time contributors understand architecture and prepare focused changes.

Codex would not be allowed to publish secrets, real customer data, or unreviewed high-risk migrations. Human maintainers remain responsible for merges, releases, and security decisions.

## Evidence checklist before submission

- [ ] Public repository and green CI
- [ ] Runnable local demo with fictional seed data
- [ ] At least one tagged release with upgrade notes
- [ ] Public issue tracker showing scoped roadmap work
- [ ] Contributor and security documentation tested by a new contributor
- [ ] Current usage/adoption evidence stated accurately
- [ ] Maintainer role and recent activity visible in public history
- [ ] Application answers reviewed for unsupported claims

The program's official guidance says core maintainers of widely used or otherwise important public projects should apply, and also encourages applications from people who believe their project or role fits. The strongest application will follow a runnable release and early community evidence, but the project may apply earlier without overstating maturity.

## Official links

- Program information: https://developers.openai.com/community/codex-for-oss
- Application form: https://openai.com/form/codex-for-oss/

## Ready-to-paste application answers

Use the closest matching field names in the current form. Replace bracketed personal details and keep the early-stage disclosure intact.

### Project name

OpenSalonOS

### Project URL

https://github.com/sthenex/open-salon-os

### Your role

I am the founder and core maintainer of OpenSalonOS. I have write access and am responsible for product direction, architecture, implementation, documentation, security policy, issue triage, releases, and contributor onboarding.

### Short project description

OpenSalonOS is a privacy-first, self-hostable operations platform for salons, spas, beauty centers, and wellness studios. It is designed to connect customer CRM, resource-based appointments, services and packages, installments and collections, inventory, staff operations, consent-aware communications, multi-branch reporting, and offline synchronization in one auditable open-source system.

### Why this project is important

Small service businesses are often forced to choose between spreadsheets and expensive closed platforms. Their data can be difficult to export, their workflows are hard to customize, and an internet outage can interrupt front-desk work. OpenSalonOS aims to give these businesses transparent data ownership, documented migration paths, strict branch permissions, auditable financial corrections, offline resilience, and a Docker-first self-hosted option that does not require paid AI or messaging providers for core functionality.

The project also addresses an underserved open-source category. Mature open alternatives for the complete salon and wellness workflow are limited, especially for multi-branch operations, packages and remaining rights, resource scheduling, consent-aware messaging, and safe legacy-data migration.

### Current project stage

OpenSalonOS is a newly launched public project in its design and foundation stage. The repository already includes an Apache-2.0 license, public roadmap, governance, security and contribution policies, clean-room architecture decisions, canonical data model, detailed user flows, accessibility-aware component contracts, design tokens, issue templates, Discussions, and passing GitHub Actions checks. The first implementation issues are public and scoped.

It does not yet claim broad adoption or a production-ready release. The immediate milestone is a runnable local TypeScript/PostgreSQL/Docker demo covering tenant and branch authorization, customer CRM, resource-based appointments, and safe data import.

### Why apply now

This is the stage where maintainer support has the highest leverage. The product boundary and safety rules are documented, while the implementation is still early enough for strong tests, review workflows, migration discipline, and contributor conventions to be built in from the first release instead of retrofitted later. I am applying as the core maintainer of a public project that targets an important but underserved part of the software ecosystem, while being transparent that it is new.

### How Codex would support the project

I would use Codex for day-to-day open-source maintenance: turning documented user flows into small reviewable changes, expanding tenant/branch permission tests, generating migration and offline-conflict test cases, reproducing issues with fictional fixtures, reviewing adapters and schema changes, keeping operator and API documentation synchronized, preparing release notes, and helping new contributors understand the architecture.

Human review will remain mandatory for merges, releases, security decisions, financial behavior, authorization changes, and data migrations. Codex will not be given real customer data or production secrets.

### How API credits would be used

API credits would be used for bounded maintainer workflows in the public repository: issue classification, pull-request summaries, documentation drift checks, migration-risk checklists, release-note drafting, and test-gap suggestions. These workflows would use repository context and fictional fixtures, publish reviewable output, and require maintainer approval before changes are merged.

### Why Codex Security would be useful

OpenSalonOS is designed for multi-tenant business data that may include personal contact details, consent records, appointments, payments, package rights, staff attendance, stock, imports, and backups. The highest-risk areas are tenant and branch isolation, permission escalation, import/export authorization, injection and file handling, offline replay protection, provider secrets, and accidental personal-data exposure in logs. Codex Security would help the project establish a repeatable security-review baseline while the architecture is still young.

### Short version for a limited text field

OpenSalonOS is a new Apache-2.0, privacy-first, self-hostable operations platform for salons and wellness studios. It targets an underserved OSS category spanning CRM, resource scheduling, packages, payments, inventory, workforce, multi-branch controls, safe imports, and offline sync. The public repo already has governance, security policy, architecture, user flows, CI, and scoped implementation issues. I am applying transparently at the foundation stage, where Codex can have the most leverage on tests, migrations, documentation, review, and contributor onboarding.

