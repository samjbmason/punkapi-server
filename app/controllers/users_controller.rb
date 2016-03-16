class UsersController < ApplicationController
  def create
    @user = User.find_or_initialize_by(email: params[:user][:email])
    if @user.save
      flash[:notice] = 'An email has been sent with your API key'
      UserMailer.new_user_api_key(@user).deliver_later
    else
      flash[:error] = 'Something went wrong, try again!'
    end

    redirect_to root_path
  end
end
