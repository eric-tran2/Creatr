Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :photos, only: [ :create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:show,:index]
  end
  # resources :photos, only: :show

  root to: 'static_pages#root'
  
end
