json.array! @beers do |b|
  json.name b.name

  json.tagline b.tagline

  json.first_brewed b.first_brewed

  json.description b.description

  json.abv b.abv

  json.ibu b.ibu

  json.target_fg b.target_fg

  json.target_og b.target_og

  json.ebc b.ebc

  json.srm b.srm

  json.ph b.ph

  json.attenuation_level b.attenuation_level

  json.set! :volume do
    json.set! :value, 20
    json.set! :unit, 'liters'
  end

  json.set! :boil_volume do
    json.set! :value, 25
    json.set! :unit, 'liters'
  end

  json.set! :method do
    json.partial! 'mash_temp', mash_temp: b.mash_temp

    json.partial! 'fermentation', fermentation_temp: b.fermentation_temp

    json.twist b.twist
  end

  json.set! :ingredients do
    json.partial! 'malt', malt: b.malt

    json.partial! 'hops', hops: b.hops

    json.yeast b.yeast
  end

  json.food_pairing b.food_pairing

  json.brewers_tips b.brewers_tips

  json.contributed_by b.contributed_by
end
