json.hops hops do |h|
  json.name h['name']

  json.set! :amount do
    json.value h['amount']['value']
    json.unit h['amount']['unit']
  end

  json.add h['add']

  json.attribute h['attribute']
end
