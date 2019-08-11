Rails.application.routes.draw do
  get 'users/edit'

  get 'users/update'

  devise_for :users
  root 'messages#index'
  resources :messages
  resources :users, only: [:edit, :update]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
