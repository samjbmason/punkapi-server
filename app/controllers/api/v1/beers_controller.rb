module Api
  module V1
    class BeersController < ApplicationController
      def index
        @beers = Beer.all
      end
    end
  end
end
