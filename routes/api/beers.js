const db = require('punkapi-db')
const paginate = require('../../lib/paginate')
const filters = require('../../lib/filters')
const schema = require('../../schemas/beers')

function beers (req, res, next) {
  req.checkQuery(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next({code: 400})
  }

  const filteredDb = filters(db, req)
  const paginatedBeers = paginate(filteredDb, req)

  res.status(200)
  res.json(paginatedBeers)
};

module.exports = beers
