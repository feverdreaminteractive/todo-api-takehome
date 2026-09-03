# To-Do API Take-Home

A REST API to-do list app, built for a take-home skills assessment. TypeScript + Express, a
layered/repository architecture, zod validation, and three tiers of automated tests.

## Status

In active development. `main` currently has only the project scaffold merged — the rest of the
implementation is built out across a stack of PRs awaiting review, each tied to a GitHub issue
and a mirrored Linear ticket.

- **[Issues](../../issues)** — one per unit of work, labeled by layer (`backend` / `frontend` /
  `infra`) and grouped into milestones
- **[Milestones](../../milestones)** — sequential: Core Implementation → Optional Enhancements →
  Extras
- **[Pull requests](../../pulls)** — stacked (each based on the previous PR, not `main`), one
  concern per PR, CI-checked
- **[Linear](https://linear.app/feverdreaminteractive/team/FEV/all)** — the FEV team's full
  issue list; this project's tickets are cross-linked back to their GitHub issue counterparts

## What's being built

**Core (required by the assignment):** full CRUD + complete/incomplete status on to-do items via
a REST API (`POST` / `GET` / `PUT` / `PATCH` / `DELETE /todos`), JSON-file persistence behind a
swappable repository interface, zod-validated input, and three tiers of tests (service unit
tests, repository tests against a real temp file, HTTP integration tests via supertest).

**Optional enhancements** (the assignment's own "if time permits" list): list filtering & sorting
via `GET /todos` query params, Docker support.

**Extras** (beyond the assignment, for differentiation): CI (GitHub Actions running lint/test/
build on every PR), a lightweight frontend (static HTML/Tailwind/vanilla JS, styled loosely after
Flowbite's admin dashboard, served from the same Express app).

## Architecture (as it lands)

```
src/
  domain/        # Todo type + zod validation schemas
  errors/        # typed NotFoundError / ValidationError
  repository/    # TodoRepository interface + in-memory + JSON-file implementations
  services/      # business rules -- validates via the domain schemas, no HTTP knowledge
  http/          # routes, controllers, middleware -- the only layer that knows it's HTTP
public/          # frontend (static, served via express.static)
```

`TodoService` depends on the `TodoRepository` *interface*, never a concrete class — that's what
makes storage swappable and the service layer testable with zero I/O.

## Setup

```sh
npm install
npm run dev   # http://localhost:3000
npm test
npm run lint
```

Full setup/testing/design-choice documentation (assumptions, trade-offs, API reference) lands
with the README PR — check the [pull requests](../../pulls) above for where that currently
stands.
