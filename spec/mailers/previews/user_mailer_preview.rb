# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/new_user_api_key
  def new_user_api_key
    user = User.create(email: 'sam@test.com')
    UserMailer.new_user_api_key(user)
  end

end
