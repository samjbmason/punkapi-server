json.malt malt do |m|
  json.name m['name']

  json.set! :amount do
    json.value m['amount']['value']
    json.unit m['amount']['unit']
  end
end
