const db = require('punkapi-db')
const hopsFilter = require('../../lib/filters/hops')

describe('hopsFilter', function() {
  it('should return beers with Nelson Sauvin', function () {
    hopsFilter('Nelson Sauvin', db).should.containDeep([{name: 'Chaos Theory'}])
    hopsFilter('Nelson Sauvin', db).should.containDeep([{name: 'Bitch Please (w/ 3 Floyds)'}])
  })

  it('should not return Dead Pony Club', function () {
    hopsFilter('Nelson Sauvin', db).should.not.containDeep([{name: 'Dead Pony Club'}])
  })
})
