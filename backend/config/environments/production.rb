require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.eager_load = true
  config.cache_classes = true
  config.api_only = true
end
