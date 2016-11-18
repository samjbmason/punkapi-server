const filter = require('lodash/filter');
const curry = require('lodash/curry');
const stringMatch = require('../stringMatch');

function beerNameFilter (val, db) {
  if (val == null) return db;
  return filter(db, (b) => stringMatch(b.name, val));
};

module.exports = curry(beerNameFilter);
