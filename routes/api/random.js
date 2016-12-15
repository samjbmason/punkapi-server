const punkapi = require('punkapi-lib')
const trackEvent = require('../../lib/trackEvent')

function random (req, res) {
  const randomBeer = punkapi.random()

  trackEvent(`API - /beers/random`)
  res.status(200)
  res.json(randomBeer)
};

module.exports = random
