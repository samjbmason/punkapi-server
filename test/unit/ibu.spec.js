const db = require('punkapi-db')
const { ibuGtFilter, ibuLtFilter } = require('../../lib/filters/ibu')

describe('ibuGtFilter', function() {
  it('should return Dead Pony Club if ibu is 34', function () {
    ibuGtFilter(34, db).should.containDeep([{name: 'Dead Pony Club'}])
  })
})

describe('ibuLtFilter', function() {
  it('should return Jet Black Heart if ibu is 46', function () {
    ibuLtFilter(46, db).should.containDeep([{name: 'Jet Black Heart'}])
  })
})
