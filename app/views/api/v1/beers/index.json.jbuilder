json.array! @beers do |beer|
  json.partial! 'beer', beer: beer
end
