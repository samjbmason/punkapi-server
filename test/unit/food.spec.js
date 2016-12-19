const db = require('punkapi-db')
const foodFilter = require('../../lib/filters/food')

describe('foodFilter', function() {
  it('should return Everday Anarchy', function () {
    foodFilter('Spiced carrot', db).should.containDeep([{name: 'Everday Anarchy'}])
  })

  it('should not return Challenger', function () {
    foodFilter('Spiced carrot', db).should.not.containDeep([{name: 'Challenger'}])
  })
})
