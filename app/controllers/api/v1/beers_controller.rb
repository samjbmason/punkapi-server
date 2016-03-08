module Api
  module V1
    class BeersController < ApplicationController
      def index
        @beers = paginate Beer.all
      end
    end
  end
end
