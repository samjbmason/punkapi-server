module Requests
  module JsonHelpers
    def json
      JSON.parse(response.body)
    end
  end

  module AuthHelpers
    def http_login(api_key)
      encoded_creds = ActionController::HttpAuthentication::Basic
        .encode_credentials(api_key, '')
      @env ||= {}
      @env['HTTP_AUTHORIZATION'] = encoded_creds
    end
  end
end

RSpec.configure do |config|
  config.include Requests::JsonHelpers, type: :request
  config.include Requests::AuthHelpers, type: :request
end
