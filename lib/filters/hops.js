const filter = require('lodash/filter')
const curry = require('lodash/curry')
const stringMatch = require('../stringMatch')

function hopsFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => {
    return b.ingredients.hops.some((o) => stringMatch(o.name, val))
  })
}

module.exports = curry(hopsFilter)
