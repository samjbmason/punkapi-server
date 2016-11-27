const db = require('punkapi-db')
const { ebcGtFilter, ebcLtFilter } = require('../../lib/filters/ebc')

describe('ebcGtFilter', function() {
  it('should return Sink The Bismarck if ebc is 39', function () {
    ebcGtFilter(39, db).should.containDeep([{name: 'Sink The Bismarck!'}])
  })
})

describe('ebcLtFilter', function() {
  it('should return Nanny State  if ebc is 31', function () {
    ebcLtFilter(31, db).should.containDeep([{name: 'Nanny State'}])
  })
})
