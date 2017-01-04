const pipe = require('lodash/fp/flow')
const removeEmptyQuery = require('../removeEmptyQuery')

// Filters
const { abvGtFilter, abvLtFilter } = require('./abv')
const { ebcGtFilter, ebcLtFilter } = require('./ebc')
const { ibuGtFilter, ibuLtFilter } = require('./ibu')
const { brewedBeforeFilter, brewedAfterFilter } = require('./brewed')
const beerNameFilter = require('./beerName')
const foodFilter = require('./food')
const hopsFilter = require('./hops')
const maltFilter = require('./malt')
const yeastFilter = require('./yeast')
const idsFilter = require('./ids')

function filters (db, req) {
  const filteredQuery = removeEmptyQuery(req.query)

  const {
    abv_gt,
    abv_lt,
    ibu_gt,
    ibu_lt,
    ebc_gt,
    ebc_lt,
    beer_name,
    yeast,
    brewed_before,
    brewed_after,
    hops,
    malt,
    food,
    ids
  } = filteredQuery

  return pipe(
    abvGtFilter(abv_gt),
    abvLtFilter(abv_lt),
    ebcGtFilter(ebc_gt),
    ebcLtFilter(ebc_lt),
    ibuGtFilter(ibu_gt),
    ibuLtFilter(ibu_lt),
    brewedBeforeFilter(brewed_before),
    brewedAfterFilter(brewed_after),
    beerNameFilter(beer_name),
    foodFilter(food),
    hopsFilter(hops),
    maltFilter(malt),
    yeastFilter(yeast),
    idsFilter(ids)
  )(db)
};

module.exports = filters
