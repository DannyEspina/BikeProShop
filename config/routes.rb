Rails.application.routes.draw do

  get 'password_resets/new'

  get 'password_resets/edit'

  root 'static_pages#home'
  get '/edit', to: 'users#edit'
  get '/new', to: 'users#new'
  post '/new',  to: 'users#create'
  get '/featured', to: 'static_pages#featured'
  get '/parts', to: 'static_pages#parts'
  get '/accessories', to: 'static_pages#accessories'
  get '/repair', to: 'static_pages#repair'
  get '/gallery', to:'static_pages#gallery'
  post '/index',   to: 'static_pages#create'
  delete '/logout',  to: 'static_pages#destroy'

  resources :users
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: [:new, :create, :edit, :update]
  resources :microposts,          only: [:index, :create, :destroy]
end
