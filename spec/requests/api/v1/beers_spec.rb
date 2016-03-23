require 'rails_helper'

describe 'Beers API' do
  describe 'GET /api/v1/beers' do

    context 'no api key present in request' do
      it 'is forbidden' do
        get '/api/v1/beers'

        expect(response).to have_http_status(401)
      end
    end

    context 'api key is present and accepted' do
      it 'shows a beer' do
        user = create(:user)
        beer = create(:beer)
        http_login(user.api_key)

        get '/api/v1/beers', {}, @env

        expect(response).to have_http_status(200)
        expect(json.count).to eq(1)
        expect(json[0]['name']).to eql(beer.name)
      end

      it 'matches name filter' do
        user = create(:user)
        beer = create(:beer)
        http_login(user.api_key)

        get '/api/v1/beers', { beer_name: '5am' }, @env

        expect(response).to have_http_status(200)
        expect(json.count).to eq(1)
        expect(json[0]['name']).to eql(beer.name)
      end

      it 'displays formatted date' do
        user = create(:user)
        create(:beer)
        http_login(user.api_key)

        get '/api/v1/beers', {}, @env

        expect(response).to have_http_status(200)
        expect(json.count).to eq(1)
        expect(json[0]['first_brewed']).to eql('June 2009')
      end
    end
  end

  describe 'GET /api/v1/beers/:id' do
    it 'shows a beer' do
      user = create(:user)
      create(:beer)
      http_login(user.api_key)

      get '/api/v1/beers/1', {}, @env

      expect(response).to have_http_status(200)
      expect(json['id']).to eq(1)
    end

    context 'invalid id' do
      it 'shows a 404' do
        user = create(:user)
        create(:beer)
        http_login(user.api_key)

        get '/api/v1/beers/1000', {}, @env

        expect(response).to have_http_status(404)
      end
    end
  end
end
