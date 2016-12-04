const db = require('punkapi-db')
const maltFilter = require('../../lib/filters/malt')

describe('maltFilter', function() {
  it('should return beers with Crystal 150', function () {
    maltFilter('Crystal 150', db).should.containDeep([{name: 'Chaos Theory'}])
    maltFilter('Crystal 150', db).should.containDeep([{name: '10 Heads High'}])
  })

  it('should not return Dead Pony Club', function () {
    maltFilter('Nelson Sauvin', db).should.not.containDeep([{name: 'Dead Pony Club'}])
  })
})
