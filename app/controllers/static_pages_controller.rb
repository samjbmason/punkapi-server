class StaticPagesController < ApplicationController
  def home
    @user = User.new
  end

  def documentation
  end
end
