json.mash_temp mash_temp do |mash|
  json.set! :temp do
    json.value mash['temp']['value']
    json.unit mash['temp']['unit']
  end

  json.duration mash['duration']
end
