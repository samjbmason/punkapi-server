class AddMaltUsedIndexToBeers < ActiveRecord::Migration
  def change
    add_index  :beers, :malt_used, using: 'gin'
  end
end
