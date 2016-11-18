const filter = require('lodash/filter')
const curry = require('lodash/curry')

function ebcGtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.ebc > val)
};

function ebcLtFilter (val, db) {
  if (val == null) return db
  return filter(db, (b) => b.ebc < val)
};

module.exports = {
  ebcGtFilter: curry(ebcGtFilter),
  ebcLtFilter: curry(ebcLtFilter)
}
