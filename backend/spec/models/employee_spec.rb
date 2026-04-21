require "rails_helper"

RSpec.describe Employee, type: :model do
  it "is invalid without required fields" do
    employee = Employee.new
    expect(employee).not_to be_valid
    expect(employee.errors[:full_name]).to be_present
  end

  it "is invalid with negative salary" do
    employee = Employee.new(
      full_name: "Alex Doe",
      job_title: "Engineer",
      country: "USA",
      salary: -10,
      department: "Engineering",
      currency: "USD",
      employment_type: "Full Time",
      join_date: Date.today,
      email: "alex@example.com"
    )
    expect(employee).not_to be_valid
  end
end
