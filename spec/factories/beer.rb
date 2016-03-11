FactoryGirl.define do
  factory :beer do
    name '5am Saint'
    tagline 'Bittersweet Chaos. Malty. Fruity. Bite.'
    first_brewed '06/2009'
    description 'Out of order and stability comes the rush of the pack. Berry and caramel riding alongside marmalade and chocolate. Spice and toast jostle with lychee and biscuit. The needle flicks to all points of the compass. It drives you towards the horizon, towards the vanishing point. And it keeps going...'
    abv 5
    ibu 30
    target_fg 1012
    target_og 1050
    ebc 60
    srm 30.5
    ph 4.4
    attenuation_level 76
    fermentation_temp 19
  end
end
