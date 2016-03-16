class UserMailer < ApplicationMailer
  def new_user_api_key(user)
    @user = user
    mail to: user.email, subject: 'Your Punk API key'
  end
end
