desc 'Load Beers from submodule and load into database'
task load_beers: :environment do
  api_data_path = "#{Rails.root}/punkapi-data/data/*.json"
  Dir.glob(api_data_path) do |f|
    puts "Loading #{f}"
    file = File.read(f)
    json = JSON.parse(file)
    Beer.find_or_create_by(name: json['name']) do |b|
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
      b.mash_temp = json['method']['mash_temp']['temp']['value']
      b.mash_temp_duration = json['method']['mash_temp']['duration']
      b.fermentation_temp = json['method']['fermentation']['temp']['value']
      b.twist = json['method']['twist']
      b.malt_json = json['ingredients']['malt'].to_json
      b.hops_json = json['ingredients']['hops'].to_json
      b.yeast = json['ingredients']['yeast']
      b.food_pairing = json['food_pairing']
      b.brewers_tips = json['brewers_tips']
      b.contributed_by = json['contributed_by']
    end
  end
end

desc 'Update a beer from data'
task update_beer: :environment do
end
