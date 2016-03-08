class StaticPagesController < ApplicationController
  def home
    @user = User.new
  end
end
