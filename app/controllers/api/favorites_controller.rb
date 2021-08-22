class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def create 
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages
    end

  end

  def destroy

  end

  def show

  end

  def update

  end

  private 
  
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :photo_id)
  end
end