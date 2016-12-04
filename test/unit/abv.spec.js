const db = require('punkapi-db')
const { abvGtFilter, abvLtFilter } = require('../../lib/filters/abv')

describe('abvGtFilter', function() {
  it('should return Sink The Bismarck if abv is 40', function () {
    abvGtFilter(40, db).should.containDeep([{name: 'Sink The Bismarck!'}])
  })
})

describe('abvLtFilter', function() {
  it('should return Nanny State  if abv is 1', function () {
    abvLtFilter(1, db).should.containDeep([{name: 'Nanny State'}])
  })
})
