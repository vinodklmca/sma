Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :employees

      get "salary_insights/country/:country", to: "salary_insights#country"
      get "salary_insights/country/:country/job_title/:job_title", to: "salary_insights#country_job_title"
      get "salary_insights/country/:country/top_job_titles", to: "salary_insights#top_job_titles"
    end
  end
end
