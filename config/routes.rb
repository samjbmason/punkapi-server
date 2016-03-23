Rails.application.routes.draw do

  post '/users', to: 'users#create', as: :users_create
  get '/documentation', to: 'static_pages#documentation', as: :documentation

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :beers, only: [:index, :show] do
        get 'random', on: :collection
      end
    end
  end

  get '/404', to: 'errors#endpoint_not_found'
  get '/500', to: 'errors#exception'

  root 'static_pages#home'
end
