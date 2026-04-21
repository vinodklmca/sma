module SalaryInsights
  class CountryMetrics
    def self.call(country)
      scope = Employee.where(country: country)
      salaries = scope.pluck(:salary)
      sorted = salaries.sort
      count = sorted.size
      median = if count.zero?
                 0
               elsif count.odd?
                 sorted[count / 2]
               else
                 (sorted[(count / 2) - 1] + sorted[count / 2]) / 2.0
               end

      {
        country: country,
        employee_count: count,
        min_salary: sorted.first || 0,
        max_salary: sorted.last || 0,
        avg_salary: count.zero? ? 0 : (sorted.sum.to_f / count).round(2),
        median_salary: median
      }
    end
  end
end
