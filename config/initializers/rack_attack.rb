class Rack::Attack
  throttle('req/key', limit: 1000, period: 60.minutes) do |req|
    if req.path.include? '/api'
      req.env['HTTP_AUTHORIZATION'].split(' ')[-1] if req.env.has_key?('HTTP_AUTHORIZATION')
    end
  end
end
