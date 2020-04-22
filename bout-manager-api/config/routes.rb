Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  use_doorkeeper do
    skip_controllers :authorizations, :applications,
      :authorized_applications
  end
  
  namespace :api do
    namespace :v1 do
        resources :districts, only: [:index] do
          resources :active_teams, only: [:index]
        end
        resources :people
        resources :events
        devise_for :users, controllers: {
          registrations: 'api/v1/users/registrations'
        }, skip: [:sessions, :password]
        resources :team_people, only: [:create]
    end
  end

  root to: "api/v1/districts#index" 
end
