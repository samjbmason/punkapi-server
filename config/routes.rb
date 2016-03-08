Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :beers, only: :index
    end
  end

  root 'static_pages#home'
end
