require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  describe 'new_user_api_key' do
    let(:user) { create(:user) }
    let(:mail) { UserMailer.new_user_api_key(user) }

    it 'renders the headers' do
      expect(mail.subject).to eq('Your Punk API key')
      expect(mail.to).to eq([user.email])
      expect(mail.from).to eq(['hello@punkapi.com'])
    end

    it 'renders the API key' do
      expect(mail.body.encoded).to match(user.api_key)
    end
  end
end
