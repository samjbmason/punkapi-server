const filter = require('lodash/filter')
const curry = require('lodash/curry')

const stringMatch = require('../stringMatch')

function foodFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => {
    return b.some((o) => stringMatch(o, val))
  })
};

module.exports = curry(foodFilter)
