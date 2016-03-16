json.id beer.id

json.name beer.name

json.tagline beer.tagline

json.first_brewed beer.first_brewed

json.description beer.description

json.abv beer.abv

json.ibu beer.ibu

json.target_fg beer.target_fg

json.target_og beer.target_og

json.ebc beer.ebc

json.srm beer.srm

json.ph beer.ph

json.attenuation_level beer.attenuation_level

json.set! :volume do
  json.set! :value, 20
  json.set! :unit, 'liters'
end

json.set! :boil_volume do
  json.set! :value, 25
  json.set! :unit, 'liters'
end

json.set! :method do
  json.partial! 'mash_temp', mash_temp: beer.mash_temp

  json.partial! 'fermentation', fermentation_temp: beer.fermentation_temp

  json.twist beer.twist
end

json.set! :ingredients do
  json.partial! 'malt', malt: beer.malt

  json.partial! 'hops', hops: beer.hops

  json.yeast beer.yeast
end

json.food_pairing beer.food_pairing

json.brewers_tips beer.brewers_tips

json.contributed_by beer.contributed_by
