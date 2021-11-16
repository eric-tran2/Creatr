Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :photos, only: [:create]
      resources :comments, only: [:create]
      resources :favorites, only: [:create]
      resources :tags, only: [:create]
    end
    resources :favorites, only: [:index, :destroy]
    resources :photos, only: [:show, :index, :update, :destroy]
    resources :comments, only: [:show, :index, :update, :destroy]
    resources :tags, only: [:show, :index, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
  # resources :photos, only: :show

  root to: 'static_pages#root'
  
end
