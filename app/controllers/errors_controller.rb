class ErrorsController < ApplicationController
  def not_found
    if env['REQUEST_PATH'] =~ /^\/api/
      json = { message: 'Endpoint Not Found',
               description: 'We dont recognise that endpoint, you are probably looking for either /random or /beers'
      }
      render json: json, status: 404
    else
      redirect_to root_path
    end
  end

  def exception
    if env['REQUEST_PATH'] =~ /^\/api/
      json = { message: 'Our Server Has Blown Up',
               description: 'Something has gone wrong, but don\'t panic it\'s something on our end, we have logged the error and are looking into it!'
      }
      render json: json, status: 500
    else
      # Add in a 500 error page here
    end
  end
end
