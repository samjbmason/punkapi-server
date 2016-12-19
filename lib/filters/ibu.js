const filter = require('lodash/filter')
const curry = require('lodash/curry')

function ibuGtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.ibu > val)
}

function ibuLtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.ibu < val)
}

exports.ibuGtFilter = curry(ibuGtFilter)
exports.ibuLtFilter = curry(ibuLtFilter)
