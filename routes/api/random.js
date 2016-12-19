const db = require('punkapi-db')
const rand = require('lodash/random')
const nth = require('lodash/nth')
const trackEvent = require('../../lib/trackEvent')

const noOfBeers = db.length

function random (req, res) {
  const randIndex = rand(noOfBeers)
  const randomBeer = nth(db, randIndex)

  trackEvent(`API - /beers/random`)
  res.status(200)
  res.json([randomBeer])
};

module.exports = random
