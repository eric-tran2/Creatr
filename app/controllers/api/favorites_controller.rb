class Api::FavoritesController < ApplicationController
  before action :require_logged_in

  private 
  
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :photo_id)
  end
end