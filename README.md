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

## Here are some UI screenshots of web application
<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/75a51c56-1c9d-4d5d-af6b-71946ab0f63d" />

<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/cee1baf1-b12c-4569-9fd8-659b27ff49c6" />

<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/775d7508-67ca-4dd6-913f-49de53926325" />

<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/10655588-c4fd-4b16-9709-3f1c23313992" />

<img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/0e2f2307-950b-4e56-9217-81ae2c3134b2" />

## Screenshots of container running locally
<img width="940" height="497" alt="image" src="https://github.com/user-attachments/assets/a5c755df-2a49-492f-bc52-3276ed7050ec" />






