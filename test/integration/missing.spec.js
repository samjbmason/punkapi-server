const request = require('supertest')
const app = require('../../index')

describe('/random/non/existing/route', function() {
  it('should return a 404 object', function(done) {
    request(app)
      .get('/random/non/existing/route')
      .end(function(err, res) {
        res.statusCode.should.equal(404)
        res.should.be.json()
        res.body.should.be.a.Object()
        done()
      })
  })
})
