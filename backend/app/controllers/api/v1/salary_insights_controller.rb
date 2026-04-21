module Api
  module V1
    class SalaryInsightsController < ApplicationController
      def country
        render json: SalaryInsights::CountryMetrics.call(params[:country])
      end

      def country_job_title
        render json: SalaryInsights::JobTitleMetrics.call(
          country: params[:country],
          job_title: params[:job_title]
        )
      end

      def top_job_titles
        render json: {
          country: params[:country],
          top_job_titles: SalaryInsights::TopJobTitles.call(country: params[:country])
        }
      end
    end
  end
end
