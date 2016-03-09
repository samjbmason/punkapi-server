Rails.application.routes.draw do
  post '/users/', to: 'users#create', as: :users_create

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :beers, only: :index do
        get 'random', on: :collection
      end
    end
  end

  root 'static_pages#home'
end
