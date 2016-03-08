json.set! :fermentation do
  json.set! :temp do
    json.value fermentation_temp
    json.set! :unit, 'celsius'
  end
end
