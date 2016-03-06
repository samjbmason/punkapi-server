json.array! @beers do |beer|
  json.(beer,
    :name,
    :tagline,
    :first_brewed,
    :description,
    :abv,
    :ibu,
    :target_fg,
    :target_og,
    :ebc,
    :srm,
    :ph,
    :attenuation_level
  )

  json.set! :volume do
    json.set! :value, 20
    json.set! :unit, 'liters'
  end

  json.set! :boil_volume do
    json.set! :value, 25
    json.set! :unit, 'liters'
  end

  json.set! :method do
    json.set! :mash_temp do
      json.set! :temp do
        json.value beer.mash_temp
        json.set! :unit, 'celsius'
      end
      json.set! :duration do
        json.value beer.mash_temp_duration
        json.set! :unit, 'minutes'
      end
    end

    json.set! :fermentation do
      json.set! :temp do
        json.value beer.fermentation_temp
        json.set! :unit, 'celsius'
      end
    end

    json.twist beer.twist
  end

  json.set! :ingredients do
    json.malt beer.malt_json
    json.hops beer.hops_json
    json.yeast beer.yeast
  end

  json.food_pairing beer.food_pairing

  json.brewers_tips beer.brewers_tips

  json.contributed_by beer.contributed_by
end
