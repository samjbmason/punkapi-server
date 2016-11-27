const filter = require('lodash/filter')
const curry = require('lodash/curry')

function abvGtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.abv > val)
}

function abvLtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.abv < val)
}

exports.abvGtFilter = curry(abvGtFilter)
exports.abvLtFilter = curry(abvLtFilter)
