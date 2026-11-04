# Project Governance

OpenSalonOS is maintained in public. Technical decisions, release plans, and contribution expectations should be understandable without private context.

## Roles

- **Contributors** submit issues, documentation, designs, tests, translations, or code.
- **Reviewers** are trusted contributors who regularly review a defined area.
- **Maintainers** merge changes, manage releases, respond to security reports, and protect project scope.

Roles are earned through sustained, constructive contributions. Maintainers document material role changes in the repository.

## Decisions

Routine decisions use lazy consensus: a proposal may proceed after public review when no substantiated objection remains. Decisions affecting architecture, security, data ownership, compatibility, or governance require an architecture decision record and explicit maintainer approval.

When consensus is not possible, maintainers decide based on user safety, project principles, long-term maintenance cost, and documented evidence. A maintainer with a material conflict of interest must disclose it and recuse themselves where appropriate.

## Releases

Releases follow semantic versioning after `1.0`. Before `1.0`, minor versions may include breaking changes, which must be described in migration notes. A release requires passing checks, an updated changelog, and a documented upgrade path for schema changes.

## Project assets

The source is licensed under Apache-2.0. The project name and logo may later receive separate trademark guidelines so forks can be clearly distinguished without limiting the license rights to the code.

## Changes to governance

Governance changes require a public pull request, at least seven days for review, and approval from two maintainers once the project has more than one maintainer.

