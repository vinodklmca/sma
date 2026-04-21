module SalaryInsights
  class TopJobTitles
    def self.call(country:, limit: 5)
      Employee.where(country: country)
              .group(:job_title)
              .order(Arel.sql("AVG(salary) DESC"))
              .limit(limit)
              .pluck(:job_title, Arel.sql("AVG(salary)"), Arel.sql("COUNT(*)"))
              .map do |job_title, avg_salary, employee_count|
        {
          job_title: job_title,
          avg_salary: avg_salary.to_f.round(2),
          employee_count: employee_count
        }
      end
    end
  end
end
