const filter = require('lodash/filter');
const curry = require('lodash/curry');
const isDateBefore = require('../dates').isDateBefore;
const isDateAfter = require('../dates').isDateAfter;

function brewedBeforeFilter (val, db) {
  if (val == null) return db;
  return filter((b) => isDateBefore(b, val));
};

function brewedAfterFilter (val, db) {
  if (val == null) return db;
  return filter((b) => isDateafter(b, val));
};

module.exports = {
  brewedBeforeFilter: curry(brewedBeforeFilter),
  brewedAfterFilter: curry(brewedAfterFilter)
};
