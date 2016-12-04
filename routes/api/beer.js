const db = require('punkapi-db')
const filter = require('lodash/filter')
const toInteger = require('lodash/toInteger')
const isEmpty = require('lodash/isEmpty')
const schema = require('../../schemas/beer')

function beer (req, res, next) {
  req.checkParams(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next({code: 400})
  }

  const { beerId } = req.params
  const beerIdInt = toInteger(beerId)
  const selectedBeer = filter(db, { id: beerIdInt })

  if (isEmpty(selectedBeer)) {
    return next({code: 404, msg: `No beer found that matches the ID ${beerId}`})
  }

  res.status(200)
  res.json(selectedBeer)
};

module.exports = beer
