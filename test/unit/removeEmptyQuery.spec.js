const removeEmptyQuery = require('../../lib/removeEmptyQuery')

describe('removeEmptyQuery', function() {
  it('should return the same object', function () {
    const query = {
      beer_name: 'Punk',
      food: 'Cheese',
      abv_gt: '10'
    }
    removeEmptyQuery(query).should.be.eql(query)
  })

  it('should return an object with only non empty values', function () {
    const query = {
      beer_name: 'Punk',
      food: '',
      abv_gt: '',
    }
    removeEmptyQuery(query).should.containEql({beer_name: 'Punk'})
    removeEmptyQuery(query).should.have.size(1)
  })
})
