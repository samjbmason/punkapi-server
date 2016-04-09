namespace :beer do
  desc 'Load Beers from submodule and load into database'
  task load: :environment do
    api_data_path = "#{Rails.root}/punkapi-data/data/*.json"
    Dir.glob(api_data_path) do |f|
      puts "Loading #{f}"
      file = File.read(f)
      json = JSON.parse(file)

      Beer.where(name: json['name'])
          .first_or_create do |b|
            puts "Creating #{json['name']}"
            b.name = json['name']
            b.tagline = json['tagline']
            b.first_brewed = json['first_brewed']
            b.description = json['description']
            b.abv = json['abv']
            b.ibu = json['ibu']
            b.target_fg = json['target_fg']
            b.target_og = json['target_og']
            b.ebc = json['ebc']
            b.srm = json['srm']
            b.ph = json['ph']
            b.attenuation_level = json['attenuation_level']
            b.mash_temp = json['method']['mash_temp'].to_json
            b.fermentation_temp = json['method']['fermentation']['temp']['value']
            b.twist = json['method']['twist']
            b.malt = json['ingredients']['malt'].to_json
            b.hops = json['ingredients']['hops'].to_json
            b.yeast = json['ingredients']['yeast']
            b.food_pairing = json['food_pairing'].map!(&:downcase)
            b.brewers_tips = json['brewers_tips']
            b.contributed_by = json['contributed_by']
            b.hops_used = create_unique_array(json['ingredients']['hops'])
            b.malt_used = create_unique_array(json['ingredients']['malt'])
          end
          .update(
            name: json['name'],
            tagline: json['tagline'],
            first_brewed: json['first_brewed'],
            description: json['description'],
            abv: json['abv'],
            ibu: json['ibu'],
            target_fg: json['target_fg'],
            target_og: json['target_og'],
            ebc: json['ebc'],
            srm: json['srm'],
            ph: json['ph'],
            attenuation_level: json['attenuation_level'],
            mash_temp: json['method']['mash_temp'].to_json,
            fermentation_temp: json['method']['fermentation']['temp']['value'],
            twist: json['method']['twist'],
            malt: json['ingredients']['malt'].to_json,
            hops: json['ingredients']['hops'].to_json,
            yeast: json['ingredients']['yeast'],
            food_pairing: json['food_pairing'].map!(&:downcase),
            brewers_tips: json['brewers_tips'],
            contributed_by: json['contributed_by'],
            hops_used: create_unique_array(json['ingredients']['hops']),
            malt_used: create_unique_array(json['ingredients']['malt'])
          )
    end
  end

  # Helper Methods
  def create_unique_array(hash)
    hash.map { |i| i['name'].downcase }.uniq
  end
end
