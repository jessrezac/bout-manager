Rails.application.routes.draw do
  use_doorkeeper
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  use_doorkeeper do 
    skip_contollers :applications, :authorized_applications
  end
  
  namespace :api do
    namespace :v1 do
        devise_for :users, controllers: {
          registrations: 'api/v1/users/registrations'
        }, skip: [:sessions, :password]
    end
  end

  root to: "home#index" 
end
