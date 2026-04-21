module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        employees = Employee.order(:id)
        employees = employees.where(country: params[:country]) if params[:country].present?
        employees = employees.where(job_title: params[:job_title]) if params[:job_title].present?

        page = params.fetch(:page, 1).to_i
        per_page = params.fetch(:per_page, 25).to_i
        paginated = employees.offset((page - 1) * per_page).limit(per_page)

        render json: { data: paginated, meta: { page: page, per_page: per_page, total: employees.count } }
      end

      def show
        render json: Employee.find(params[:id])
      end

      def create
        employee = Employee.new(employee_params)
        if employee.save
          render json: employee, status: :created
        else
          render json: { errors: employee.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        employee = Employee.find(params[:id])
        if employee.update(employee_params)
          render json: employee
        else
          render json: { errors: employee.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        Employee.find(params[:id]).destroy!
        head :no_content
      end

      private

      def employee_params
        params.require(:employee).permit(
          :full_name, :job_title, :country, :salary, :department, :currency, :employment_type, :join_date, :email
        )
      end
    end
  end
end
