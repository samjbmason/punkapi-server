const punkapi = require('punkapi-lib')
const paginate = require('../../lib/paginate')
const trackEvent = require('../../lib/trackEvent')
const schema = require('../../schemas/beers')
const { validationError } = require('../../lib/errorHandler')

function beers(req, res, next) {
  req.checkQuery(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next(validationError(errors))
  }

  const filteredDb = punkapi.beers(req.query)
  const paginatedBeers = paginate(filteredDb, req)

  trackEvent(`API - /beers/ - ${req.originalUrl}`)
  trackEvent('API Hit')
  res.status(200)
  res.json(paginatedBeers)
}

module.exports = beers
