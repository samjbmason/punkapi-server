const db = require('punkapi-db')
const { brewedBeforeFilter, brewedAfterFilter } = require('../../lib/filters/brewed')

describe('brewedBeforeFilter', function() {
  it('should return Punk IPA 2010 if date is 11-2010', function () {
    brewedBeforeFilter('11-2010', db).should.containDeep([{name: 'Punk IPA 2010 - Current'}])
  })

  it('should not return Punk IPA 2010 if date is 09-2009', function () {
    brewedBeforeFilter('09-2009', db).should.not.containDeep([{name: 'Punk IPA 2010 - Current'}])
  })
})

describe('brewedAfterFilter', function() {
  it('should return Elvis Juice if date is 11-2010', function () {
    brewedAfterFilter('11-2010', db).should.containDeep([{name: 'Elvis Juice V2.0 - Prototype Challenge'}])
  })

  it('should not return Punk IPA 2010 if date is 09-2011', function () {
    brewedAfterFilter('09-2011', db).should.not.containDeep([{name: 'Punk IPA 2010 - Current'}])
  })
})
