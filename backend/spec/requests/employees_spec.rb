require "rails_helper"

RSpec.describe "Employees API", type: :request do
  let(:valid_payload) do
    {
      employee: {
        full_name: "Jane Doe",
        job_title: "Software Engineer",
        country: "USA",
        salary: 100000,
        department: "Engineering",
        currency: "USD",
        employment_type: "Full Time",
        join_date: "2023-01-01",
        email: "jane.doe@example.com"
      }
    }
  end

  it "creates and fetches an employee" do
    post "/api/v1/employees", params: valid_payload
    expect(response).to have_http_status(:created)
    created = JSON.parse(response.body)

    get "/api/v1/employees/#{created["id"]}"
    expect(response).to have_http_status(:ok)
  end

  it "lists employees with pagination metadata" do
    post "/api/v1/employees", params: valid_payload
    get "/api/v1/employees", params: { page: 1, per_page: 10 }
    body = JSON.parse(response.body)
    expect(body["meta"]["total"]).to be >= 1
  end
end
