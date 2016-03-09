class AddHopsUsedIndexToBeers < ActiveRecord::Migration
  def change
    add_index  :beers, :hops_used, using: 'gin'
  end
end
