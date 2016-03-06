class Beer < ActiveRecord::Base

  def first_brewed
    super.strftime('%Y-%m')
  end

  def first_brewed=(value)
    super(value.to_date)
  end
end
