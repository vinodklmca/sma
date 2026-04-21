require "rails_helper"

RSpec.describe SalaryInsights::CountryMetrics do
  it "calculates min max avg median" do
    [100, 200, 300].each_with_index do |salary, idx|
      Employee.create!(
        full_name: "User #{idx}",
        job_title: "Engineer",
        country: "USA",
        salary: salary,
        department: "Engineering",
        currency: "USD",
        employment_type: "Full Time",
        join_date: Date.today,
        email: "user#{idx}@example.com"
      )
    end

    result = described_class.call("USA")
    expect(result[:min_salary]).to eq(100)
    expect(result[:max_salary]).to eq(300)
    expect(result[:avg_salary]).to eq(200.0)
    expect(result[:median_salary]).to eq(200)
  end
end
