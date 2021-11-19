class Api::TagsController < ApplicationController

  before_action :require_logged_in

  def index
    @tags = Tag.all
    render :index
  end

  def show 
    @tag = Tag.find(params[:id])
    render :show
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: {message: 'Hello'}
    end
  end

  def destroy
    @tag = current_user.tags.find_by(id: params[:id])
    # @tag = Tag.find_by(id: params[:id])
    if @tag && @tag.destroy
        render json: {tagId: @tag.id}
    else
        render json: {message: 'Unsuccessful in trying to delete tag'}
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:photo_id, :name)
  end

end