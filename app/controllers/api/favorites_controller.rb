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
    @favorite = current_user.favorite.find_by()
    if @favorite && @favorite.delete
      render json: {message: 'Photo has been favorited successfully'}
    else
      render json: {message: 'Unsuccessful in trying to favorite photo'}
    end
  end

  def index 
    @favorites = Favorite.all
  end

  def show
    @favorite = Favorite.find(params[:id])
  end


  private 
  
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :photo_id)
  end
end