require 'sidekiq/web'
Rails.application.routes.draw do
  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :posts, only: %i[create new]
  resource :authentication, only: %i[create destroy]
  mount Sidekiq::Web => '/sidekiq'
end
