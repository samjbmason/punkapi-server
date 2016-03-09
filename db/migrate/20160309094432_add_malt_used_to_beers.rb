class AddMaltUsedToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :malt_used, :string, array: true, default: []
  end
end
