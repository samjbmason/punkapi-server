require "rails_helper"

RSpec.describe User, type: :model do

  it 'generates an api_key' do
    user = create(:user)
    expect(user.api_key).not_to be_empty
  end

  it 'does not create a new key for an existing user' do
    user = User.find_or_initialize_by(email: 'sam@test.com')
    user.save

    returning_user = User.find_or_initialize_by(email: 'sam@test.com')
    returning_user.save

    expect(user.api_key).to eq returning_user.api_key
  end
end
