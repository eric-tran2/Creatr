class Api::TagsController < ApplicationController
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
    if @tag.save!
      render :show
    else
      render json: @tag.errors.full_messages
    end
  end

  def destroy
    @tag = current_user.tags.find_by(id: params[:id])
    if @comment && @comment.destroy
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