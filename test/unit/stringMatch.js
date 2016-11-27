const stringMatch = require('../../lib/stringMatch')

describe('stringMatch', function() {
  it('should return true if firstString matches secondString', function () {
    const firstString = 'A really Cool Beer'
    const secondString = 'cool'
    stringMatch(firstString, secondString).should.be.true()
  })

  it('should return false if secondString doesnt match anything in firstString', function () {
    const firstString = 'A really Cool Beer'
    const secondString = 'nothing matches'
    stringMatch(firstString, secondString).should.be.false()
  })
})
