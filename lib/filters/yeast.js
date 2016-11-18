const filter = require('lodash/filter')
const curry = require('lodash/curry')
const stringMatch = require('../stringMatch')

function yeastFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => stringMatch(b.ingredients.yeast, val))
};

module.exports = curry(yeastFilter)
