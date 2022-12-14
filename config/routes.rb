Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  

  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  get "/auth", to: "users#show"

  resources :users, only: [:index, :create, :show, :destroy]

  resources :events
  resources :vendors
  resources :clients
  resources :event_vendors



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
