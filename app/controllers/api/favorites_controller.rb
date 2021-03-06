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
    @favorite = Favorite.find_by(id: params[:id])
    if @favorite && @favorite.destroy
      render json: {message: 'Photo has been unfavorited successfully'}
    else
      render json: {message: 'Unsuccessful in trying to unfavorite photo'}
    end
  end

  def index 
    @favorites = Favorite.all
    render :index
  end

  def show
    @favorite = Favorite.find(params[:id])
    render :show
  end


  private 
  
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :photo_id)
  end
end