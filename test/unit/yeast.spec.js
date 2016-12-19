const db = require('punkapi-db')
const yeastFilter = require('../../lib/filters/yeast')

describe('yeastFilter', function() {
  it('should return Sink The Bismarck', function () {
    yeastFilter('Wyeast 1272', db).should.containDeep([{name: 'Sink The Bismarck!'}])
  })

  it('should not return Dead Pony Club', function () {
    yeastFilter('Wyeast 1272', db).should.not.containDeep([{name: 'Dead Pony Club'}])
  })
})
