const db = require('punkapi-db')
const paginate = require('../../lib/paginate')
const filters = require('../../lib/filters')
const { validationError } = require('../../lib/errorHandler')

// Schema
const schema = {
  page: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 1 } }
  },
  per_page: {
    errorMessage: 'Must be a number greater than 0 and less than 80',
    optional: true,
    isInt: { options: { min: 1, max: 80 } }
  },
  abv_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  abv_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ibu_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ibu_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ebc_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ebc_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  brewed_before: {
    errorMessage: 'Must be in date format of mm/yyyy',
    optional: true,
    matches: /\d{2}-\d{4}\b/
  },
  brewed_after: {
    errorMessage: 'Must be in date format of mm/yyyy',
    optional: true,
    matches: /\d{2}-\d{4}\b/
  }
}

function beers (req, res, next) {
  req.checkQuery(schema)

  const errors = req.validationErrors()

  if (errors) {
    return next(validationError(errors))
  }

  const filteredDb = filters(db, req)
  const paginatedBeers = paginate(filteredDb, req)

  res.status(200)
  res.json(paginatedBeers)
};

module.exports = beers
