module Api
  module V1
    class BeersController < Api::ApiController
      before_action :authenticate
      has_scope :abv_gt
      has_scope :abv_lt
      has_scope :ibu_gt
      has_scope :ibu_lt
      has_scope :ebc_gt
      has_scope :ebc_lt
      has_scope :beer_name
      has_scope :yeast
      has_scope :brewed_before do |controller, scope, value|
        date = Date.strptime(value, "%m-%Y")
        scope.brewed_before(date)
      end
      has_scope :brewed_after do |controller, scope, value|
        date = Date.strptime(value, "%m-%Y")
        scope.brewed_after(date)
      end
      has_scope :hops do |controller, scope, value|
        scope.hops(value.downcase)
      end
      has_scope :malt do |controller, scope, value|
        scope.malt(value.downcase)
      end
      has_scope :food do |controller, scope, value|
        scope.food(value.downcase)
      end

      def index
        filtered_beers = apply_scopes(Beer)
        @beers = paginate(filtered_beers)
      end

      def show
        @beer = Beer.find(params[:id])

      rescue ActiveRecord::RecordNotFound
          json = { message: 'Record Not Found',
                   description: "There isn't a beer matching the ID #{params[:id]}"
          }
          render json: json, status: 404
      end

      def random
        random = rand(Beer.count)
        @beer = Beer.offset(random).first
      end
    end
  end
end
