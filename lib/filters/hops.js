const filter = require('lodash/filter');
const curry = require('lodash/curry');
const arrayStringMatch = require('../stringMatch');

function hopsFilter (val, db) {
  if (val == null) return db;
  return filter(db, (b) => {
    return b.some((o) => stringMatch(o.name, val));
  });
};

module.exports = curry(hopsFilter);
