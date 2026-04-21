require "rails_helper"

RSpec.describe "Salary Insights API", type: :request do
  before do
    Employee.create!(
      full_name: "A User",
      job_title: "Software Engineer",
      country: "India",
      salary: 100,
      department: "Engineering",
      currency: "INR",
      employment_type: "Full Time",
      join_date: Date.today,
      email: "a@example.com"
    )
    Employee.create!(
      full_name: "B User",
      job_title: "Software Engineer",
      country: "India",
      salary: 200,
      department: "Engineering",
      currency: "INR",
      employment_type: "Full Time",
      join_date: Date.today,
      email: "b@example.com"
    )
  end

  it "returns country metrics" do
    get "/api/v1/salary_insights/country/India"
    body = JSON.parse(response.body)
    expect(body["avg_salary"]).to eq(150.0)
  end

  it "returns country and job title metrics" do
    get "/api/v1/salary_insights/country/India/job_title/Software%20Engineer"
    body = JSON.parse(response.body)
    expect(body["employee_count"]).to eq(2)
  end
end
