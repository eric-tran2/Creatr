class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def create 

  end

  def show

  end

  def update

  end

  def destroy

  end

  private 
  
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :photo_id)
  end
end