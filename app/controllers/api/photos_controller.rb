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

end