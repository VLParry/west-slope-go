Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :enrollments
  resources :activities
  resources :users

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # get '/my_activities', to: 'activities#my_activities'
  # #trying above route to display all activites for logged in user 
  
 

  
end
