const filter = require('lodash/filter')
const curry = require('lodash/curry')
const { stringFuzzyMatch } = require('../stringMatch')

function beerNameFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => stringFuzzyMatch(b.name, val))
}

module.exports = curry(beerNameFilter)
