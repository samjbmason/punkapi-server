const db = require('punkapi-db')
const idsFilter = require('../../lib/filters/ids')

describe('idsFilter', function() {
  it('should return beers with ids 2,8,20', function () {
    idsFilter('2|8|20', db).should.containDeep([{id: 2}, {id: 8}, {id: 20}])
  })
})
