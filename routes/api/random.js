const db = require('punkapi-db')
const rand = require('lodash/random')
const nth = require('lodash/nth')

const noOfBeers = db.length

function random (req, res) {
  const randIndex = rand(noOfBeers)
  const randomBeer = nth(db, randIndex)

  res.status(200)
  res.json([randomBeer])
};

module.exports = random
