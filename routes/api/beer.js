const db = require('punkapi-db')
const toInteger = require('lodash/toInteger')
const isEmpty = require('lodash/isEmpty')
const idFilter = require('../../lib/filters/id')
const trackEvent = require('../../lib/trackEvent')
const { notFoundError, validationError } = require('../../lib/errorHandler')
const schema = require('../../schemas/beer')

function beer (req, res, next) {
  req.checkParams(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next(validationError(errors))
  }

  const { beerId } = req.params
  const beerIdInt = toInteger(beerId)
  const selectedBeer = idFilter(beerIdInt, db)

  if (isEmpty(selectedBeer)) {
    return next(notFoundError(`No beer found that matches the ID ${beerId}`))
  }

  trackEvent(`API - /beers/id - ${req.originalUrl}`)
  res.status(200)
  res.json(selectedBeer)
};

module.exports = beer
