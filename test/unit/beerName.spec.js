const db = require('punkapi-db')
const beerNameFilter = require('../../lib/filters/beerName')

describe('beerNameFilter', function() {
  it('should return Sink The Bismarck', function () {
    beerNameFilter('Sink The', db).should.containDeep([{name: 'Sink The Bismarck!'}])
  })

  it('should not return Dead Pony Club', function () {
    beerNameFilter('Sink The', db).should.not.containDeep([{name: 'Dead Pony Club'}])
  })
})
