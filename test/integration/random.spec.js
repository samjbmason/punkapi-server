const request = require('supertest')
const app = require('../../index')

describe('/beers/random', function() {
  it('should return one beer at random', function (done) {
    request(app)
      .get('/beers/random')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body.should.be.a.Object()
        res.body.should.have.keys('id', 'name', 'food_pairing')
        done()
      });
  })
})
