class Employee < ApplicationRecord
  validates :full_name, :job_title, :country, :salary, :department, :currency, :employment_type, :join_date, :email, presence: true
  validates :salary, numericality: { greater_than_or_equal_to: 0 }
  validates :email, uniqueness: true
end
