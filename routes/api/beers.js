const db = require('punkapi-db')
const sortBy = require('lodash/sortBy')
const paginate = require('../../lib/paginate')
const filters = require('../../lib/filters')
const schema = require('../../schemas/beers')
const { notFoundError, validationError } = require('../../lib/errorHandler')

function beers (req, res, next) {
  req.checkQuery(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next(validationError(errors))
  }

  const orderedDb = sortBy(db, ['id'])
  const filteredDb = filters(orderedDb, req)
  const paginatedBeers = paginate(filteredDb, req)

  res.status(200)
  res.json(paginatedBeers)
};

module.exports = beers
