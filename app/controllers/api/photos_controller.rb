class Api::PhotosController < ApplicationController

  def index 
    @photos = Photo.all
    # render :index
    # dont need render bc sending json request from frontend  and response will begin jbuilder
  end

  def show
    @photo = Photo.find(params[:id])
    # render :show
  end

  def create
    photo = Photo.new(photo_params)
    photo[:author_id] = current_user.id
    if photo.save
      render json: {message: "Image successfully uploaded!"}
    else
      render json: photo.errors.full_messages
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
     if @photo && @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    @photo.destroy!
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :photo)
  end

end