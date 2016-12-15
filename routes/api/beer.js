const punkapi = require('punkapi-lib')
const toInteger = require('lodash/toInteger')
const isEmpty = require('lodash/isEmpty')
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
  const selectedBeer = punkapi.beer(beerIdInt)

  if (isEmpty(selectedBeer)) {
    return next(notFoundError(`No beer found that matches the ID ${beerId}`))
  }

  trackEvent(`API - /beers/id - ${req.originalUrl}`)
  res.status(200)
  res.json(selectedBeer)
};

module.exports = beer
