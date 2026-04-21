require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.eager_load = false
  config.cache_classes = true
  config.api_only = true
end
