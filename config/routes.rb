Rails.application.routes.draw do
  
  resources :clients
  resources :events
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  

  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  get "/auth", to: "users#show"

  resources :users, only: [:index, :create, :show, :destroy]

  resources :events
 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
