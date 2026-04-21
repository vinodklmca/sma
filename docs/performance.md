# Performance Notes

## Seed Performance
- Deterministic RNG (`Random.new(42)`) ensures repeatable data.
- `insert_all` batch writes (1000 records/batch) avoids per-row insert overhead.
- Preloaded name arrays avoid repeated file I/O.
- `delete_all` before insert keeps runs idempotent for repeated engineer workflows.

## Query Performance
- Indexes:
  - `country`
  - `job_title`
  - `(country, job_title)`
- Aggregation endpoint scopes by indexed columns before computing metrics.

## Scale Target
- Dataset is seeded to 10,000 employees by default.
- API pagination defaults to 25 per page and supports client control.
