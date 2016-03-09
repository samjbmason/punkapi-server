module Api
  class ApiController < ApplicationController
    protected
    
    def authenticate
      authenticate_api_key || render_unauthorized
    end

    def authenticate_api_key
      authenticate_with_http_basic do |username, _password|
        User.find_by(api_key: username)
      end
    end

    def render_unauthorized
      headers['WWW-Authenticate'] = 'Basic realm="Application"'
      render json: 'Bad credentials', status: 401
    end
  end
end
