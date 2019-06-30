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
  const {paginatedBeers,total,per_page,page,pages} = paginate(filteredDb, req)

  trackEvent(`API - /beers/ - ${req.originalUrl}`)
  res.set('X-total', total);
  res.set('X-per-page',per_page);
  res.set('X-page',page);
  res.set('X-pages',pages);
  res.status(200)
  res.json(paginatedBeers)
}

module.exports = beers
