# Salary Management System

Two-service application for HR salary management across 10,000 employees.

## Tech Stack
- Backend microservice: Ruby on Rails API (`backend`)
- Frontend microservice: React + Vite + Material UI (`frontend`)
- Database: PostgreSQL
- Orchestration: Docker Compose

## Features
- Employee management: add, view, update, delete employees.
- Salary insights by country:
  - min, max, avg, median salary
  - employee count
- Salary insight by job title in country:
  - average salary
  - role headcount
- Additional metric:
  - top job titles in country by average salary

## Run Locally
```bash
docker compose up --build
```

Backend: `http://localhost:3000`  
Frontend: `http://localhost:5173`

## Setup Database
```bash
docker compose run --rm backend bundle exec rails db:create db:migrate
docker compose run --rm backend bundle exec rails db:seed
```

## Testing
```bash
docker compose run --rm backend bundle exec rspec
docker compose run --rm frontend npm test
```

## API Endpoints
- `GET /api/v1/employees`
- `POST /api/v1/employees`
- `GET /api/v1/employees/:id`
- `PATCH /api/v1/employees/:id`
- `DELETE /api/v1/employees/:id`
- `GET /api/v1/salary_insights/country/:country`
- `GET /api/v1/salary_insights/country/:country/job_title/:job_title`
- `GET /api/v1/salary_insights/country/:country/top_job_titles`

See docs in `docs/` for architecture, trade-offs, and performance notes.
