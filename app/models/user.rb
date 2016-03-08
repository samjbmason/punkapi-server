class User < ActiveRecord::Base
  before_save :set_api_key
  validates :email, presence: true

  private

  def set_api_key
    self.api_key = generate_api_key
  end

  def generate_api_key
    SecureRandom.uuid.delete('-')
  end
end
