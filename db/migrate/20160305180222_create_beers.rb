class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name
      t.string :tagline
      t.date :first_brewed
      t.text :description
      t.float :abv
      t.float :ibu
      t.float :target_fg
      t.float :target_og
      t.float :ebc
      t.float :srm
      t.float :ph
      t.float :attenuation_level
      t.jsonb :mash_temp
      t.float :fermentation_temp
      t.text :twist
      t.jsonb :malt
      t.jsonb :hops
      t.string :yeast
      t.string :food_pairing, array: true, default: []
      t.text :brewers_tips
      t.string :contributed_by

      t.timestamps null: false
    end
  end
end
