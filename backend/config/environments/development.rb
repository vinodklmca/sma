require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.eager_load = false
  config.consider_all_requests_local = true
  config.cache_classes = false
  config.api_only = true
end
