class User < ActiveRecord::Base
  before_create :set_api_key
  validates :email, presence: true, allow_blank: false

  def update_api_key
    set_api_key
    save
  end

  private

  def set_api_key
    self.api_key = generate_api_key
  end

  def generate_api_key
    SecureRandom.uuid.delete('-')
  end
end
