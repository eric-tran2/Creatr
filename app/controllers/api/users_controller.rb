class Api::UsersController < ApplicationController

  def index 
    @users = User.all
  end

  def show 
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # render "api/users"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :age, :password)
  end


end