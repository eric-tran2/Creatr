class Api::CommentsController < ApplicationController

  before_action :require_logged_in

  def index 
    @comments = Comment.all
  end
  # change index to make sure it grabs all the comments of the specific photo

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new[comment_params]
    
    if @comment.save
      render json: {message: "Message successfully posted"}
    else
      render json: comment.errors.full_messages
    end
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment && @comment.update(comments_params)
      render: show 
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy
  end

  private 

  def comment_params
    params.require(:comment).permit(:body, :photo_id, :commenter_id)
  end


end