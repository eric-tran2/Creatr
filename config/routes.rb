Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :photos, only: [:create]
      resources :comments, only: [:create]
      resources :favorites, only: [:create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:show, :index, :update, :destroy]
    resources :comments, only: [:show, :index, :update, :destroy]
    resources :favorites, only: [:show, :index, :destroy]
  end
  # resources :photos, only: :show

  root to: 'static_pages#root'
  
end
