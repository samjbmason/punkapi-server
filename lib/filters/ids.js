const filter = require('lodash/filter')
const includes = require('lodash/includes')
const curry = require('lodash/curry')

function idsFilter (val, db) {
  if (val == null) return db

  const idArray = val.split('|').map(Number)
  return filter(db, (b) => includes(idArray, b.id))
}

module.exports = curry(idsFilter)
