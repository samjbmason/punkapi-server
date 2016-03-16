class Beer < ActiveRecord::Base
  default_scope { order(:first_brewed) }
  scope :abv_gt,        -> abv { where("abv > ?", abv) }
  scope :abv_lt,        -> abv { where("abv < ?", abv) }
  scope :ibu_gt,        -> ibu { where("ibu > ?", ibu) }
  scope :ibu_lt,        -> ibu { where("ibu < ?", ibu) }
  scope :ebc_gt,        -> ebc { where("ebc > ?", ebc) }
  scope :ebc_lt,        -> ebc { where("ebc < ?", ebc) }
  scope :beer_name,     -> name { where("name ILIKE ?", "%#{name}%") }
  scope :yeast,         -> yeast { where("yeast ILIKE ?", "%#{yeast}%") }
  scope :hops,          -> hops { where("hops_used @> ?", "{#{hops}}") }
  scope :malt,          -> malt { where("malt_used @> ?", "{#{malt}}") }
  scope :brewed_before, -> date { where("first_brewed < ?", date)
                                  .order(first_brewed: :desc) }
  scope :brewed_after,  -> date { where("first_brewed > ?", date)
                                  .order(:first_brewed) }
  scope :food,          -> food { where("array_to_string(food_pairing, ',') ILIKE ?", "%#{food}%") }


  def first_brewed
    super.strftime('%B %Y')
  end

  def first_brewed=(value)
    super(value.to_date)
  end

  def food_pairing
    super.map!(&:capitalize)
  end
end
