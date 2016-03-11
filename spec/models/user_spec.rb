require "rails_helper"

RSpec.describe User, type: :model do

  it "generates an api_key" do
    user = create(:user)
    expect(user.api_key).not_to be_empty
  end
end
