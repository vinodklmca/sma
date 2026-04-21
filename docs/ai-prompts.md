# AI Development Artifacts

## Objective Prompt Summary
- Build a strict two-service salary management app.
- Use Rails API + React UI + PostgreSQL.
- Include deterministic 10,000-employee seeding.
- Add meaningful unit tests and maintain code quality.
- Provide architecture/trade-off/performance documentation.

## Engineering Guidance Used
- Keep service boundaries explicit (`frontend` and `backend` folders).
- Prefer deterministic and fast tests.
- Use modular service objects for salary analytics.
- Keep seed scripts idempotent and batch-oriented.

## Why This Matters
- Documents implementation intent and makes AI-assisted decisions auditable during review.
