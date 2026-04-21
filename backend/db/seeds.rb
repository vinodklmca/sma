require "csv"

first_names = File.readlines(Rails.root.join("db/seeds/first_names.txt"), chomp: true)
last_names = File.readlines(Rails.root.join("db/seeds/last_names.txt"), chomp: true)

countries = %w[India USA Germany UK Canada]
job_titles = ["Software Engineer", "Senior Engineer", "HR Specialist", "Finance Analyst", "Engineering Manager"]
departments = ["Engineering", "HR", "Finance", "Operations", "Sales"]
employment_types = ["Full Time", "Contract", "Part Time"]
currencies = { "India" => "INR", "USA" => "USD", "Germany" => "EUR", "UK" => "GBP", "Canada" => "CAD" }

rng = Random.new(42)
batch = []
target_count = 10_000
now = Time.current

Employee.delete_all

target_count.times do |i|
  first = first_names[rng.rand(first_names.length)]
  last = last_names[rng.rand(last_names.length)]
  country = countries[rng.rand(countries.length)]

  batch << {
    full_name: "#{first} #{last}",
    job_title: job_titles[rng.rand(job_titles.length)],
    country: country,
    salary: rng.rand(30_000..250_000),
    department: departments[rng.rand(departments.length)],
    currency: currencies[country],
    employment_type: employment_types[rng.rand(employment_types.length)],
    join_date: Date.today - rng.rand(100..3000),
    email: "#{first.downcase}.#{last.downcase}.#{i}@example.com",
    created_at: now,
    updated_at: now
  }

  if batch.length >= 1000
    Employee.insert_all(batch)
    batch.clear
  end
end

Employee.insert_all(batch) unless batch.empty?
puts "Seeded #{Employee.count} employees"
