# Trade-offs

## Rails API-Only vs Full Rails
- Chosen: API-only style for clear microservice boundaries.
- Trade-off: less built-in server-rendering convenience, but better decoupling with React frontend.

## Aggregation in Ruby vs SQL
- Chosen: mixed approach.
  - Country and job metrics use straightforward fetch + compute for readability.
  - Top job titles uses SQL aggregation for efficiency.
- Trade-off: pure SQL could be faster for very large datasets, but current approach is easier to maintain.

## UI Component Library
- Chosen: Material UI for speed and consistency.
- Trade-off: larger bundle than fully custom components, but higher delivery velocity.
