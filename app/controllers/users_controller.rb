class UsersController < ApplicationController
  def create
    @user = User.find_or_create_by(email: params[:user][:email])

    if @user
      flash[:notice] = 'An email has been sent with your API key'
    else
      flash[:error] = 'Something went wrong, try again!'
    end

    redirect_to root_path
  end
end
