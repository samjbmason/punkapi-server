const filter = require('lodash/filter')
const curry = require('lodash/curry')

function idFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.id === val)
}

module.exports = curry(idFilter)
