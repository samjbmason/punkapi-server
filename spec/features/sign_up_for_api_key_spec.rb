require 'rails_helper'

RSpec.feature 'User signs up for API key' do
  scenario 'they see a success banner' do
    visit root_path
    fill_in 'user[email]', with: 'sam@test.com'
    click_on 'Get API Key'
    expect(page).to have_text('An email has been sent with your API key')
  end

  scenario 'they see a error banner' do
    visit root_path
    click_on 'Get API Key'
    expect(page).to have_text('Something went wrong, try again!')
  end
end
