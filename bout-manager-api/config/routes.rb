Rails.application.routes.draw do
  use_doorkeeper
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
  namespace :api do
    namespace :v1 do
        resources :districts, only: [:index]
        devise_for :users, controllers: {
          registrations: 'api/v1/users/registrations'
        }, skip: [:sessions, :password]
    end
  end

  root to: "api/v1/districts#index" 
end
