const filter = require('lodash/filter')
const curry = require('lodash/curry')
const stringMatch = require('../stringMatch')

function maltFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => {
    return b.ingredients.malt.some((o) => stringMatch(o.name, val))
  })
}

module.exports = curry(maltFilter)
