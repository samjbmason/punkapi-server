class AddHopsUsedToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :hops_used, :string, array: true, default: []
  end
end
