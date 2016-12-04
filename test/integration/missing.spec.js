const request = require('supertest')
const app = require('../../index')

describe('/random/non/existing/route', function() {
  it('should return one beer at random', function (done) {
    request(app)
      .get('/beers/random')
      .end(function(err, res) {
        res.statusCode.should.equal(404)
        res.should.be.json()
        res.body.should.be.a.Object()
        done()
      });
  })
})
