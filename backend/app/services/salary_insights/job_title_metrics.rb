module SalaryInsights
  class JobTitleMetrics
    def self.call(country:, job_title:)
      scope = Employee.where(country: country, job_title: job_title)
      salaries = scope.pluck(:salary)
      count = salaries.size

      {
        country: country,
        job_title: job_title,
        employee_count: count,
        avg_salary: count.zero? ? 0 : (salaries.sum.to_f / count).round(2)
      }
    end
  end
end
