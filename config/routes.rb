# frozen_string_literal: true

Rails.application.routes.draw do
  # get 'greetings/index'
  root 'greetings#index'

   namespace :api do
     namespace :v1 do
       resources :greetings
     end
   end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
end
