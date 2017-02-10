const request = require('supertest')
const moment = require('moment')
const app = require('../../index')

describe('/v2/beers/', function() {
  it('sould return beers in ascending order by ID', function (done) {
    request(app)
      .get('/v2/beers/')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body.should.be.a.Array()
        res.body[0].id.should.be.eql(1)
        res.body[1].id.should.be.eql(2)
        res.body[12].id.should.be.eql(13)
        done()
      })
  })

  it('should return 25 beers by default', function (done) {
    request(app)
      .get('/v2/beers/')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body.should.be.a.Array()
        res.body.should.have.length(25)
        done()
      })
  })

  it('should return beers with abv greater than 10', function (done) {
    request(app)
      .get('/v2/beers/?abv_gt=10')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].abv.should.be.above(10)
        done()
      })
  })

  it('should return beers with name matching chars punk', function (done) {
    request(app)
      .get('/v2/beers/?beer_name=punk')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].name.should.be.match(/punk$/i)
        done()
      })
  })

  it('should return beers brewed after 02/2014', function (done) {
    const givenDate = moment('02-2014', 'MM-YYYY').format('X')

    request(app)
      .get('/v2/beers/?brewed_after=02-2014')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        const brewedDate = moment(res.body[0].first_brewed, 'MM/YYYY').format('X')
        brewedDate.should.be.greaterThan(givenDate)
        done()
      })
  })

  it('should return beers brewed before 02/2014', function (done) {
    const givenDate = moment('02-2014', 'MM-YYYY').format('X')

    request(app)
      .get('/v2/beers/?brewed_before=02-2014')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        const brewedDate = moment(res.body[0].first_brewed, 'MM/YYYY').format('X')
        brewedDate.should.be.lessThan(givenDate)
        done()
      })
  })

  it('should return beers with ebc greater than 25', function (done) {
    request(app)
      .get('/v2/beers/?ebc_gt=25')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ebc.should.be.above(25)
        done()
      })
  })

  it('should return beers with ebc less than 25', function (done) {
    request(app)
      .get('/v2/beers/?ebc_lt=25')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ebc.should.be.below(25)
        done()
      })
  })

  it('should return beers that match the food pairing string of mint', function (done) {
    request(app)
      .get('/v2/beers/?food=mint')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].food_pairing.should.matchAny(/mint/i)
        done()
      })
  })

  it('should return beers that contain hops with Nelson Sauvin', function (done) {
    request(app)
      .get('/v2/beers/?hops=nelson')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ingredients.hops.should.matchAny(function (v) {
          v.name.should.match(/nelson/i)
        })
        done()
      })
  })

  it('should return beers with ibu greater than 12', function (done) {
    request(app)
      .get('/v2/beers/?ibu_gt=12')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ibu.should.be.above(12)
        done()
      })
  })

  it('should return beers with ibu less than 20', function (done) {
    request(app)
      .get('/v2/beers/?ibu_lt=20')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ibu.should.be.below(20)
        done()
      })
  })

  it('should return beers with malt matching Extra Pale', function (done) {
    request(app)
      .get('/v2/beers/?malt=Pale')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ingredients.malt.should.matchAny(function (v) {
          v.name.should.match(/pale/i)
        })
        done()
      })
  })

  it('should return beers with yeast matching Wyeast 1056', function (done) {
    request(app)
      .get('/v2/beers/?yeast=Wyeast_1056')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].ingredients.yeast.should.match(/Wyeast 1056/i)
        done()
      })
  })

  it('should return beers with ids of 1,4,29', function (done) {
    request(app)
      .get('/v2/beers/?ids=1|4|29')
      .end(function(err, res) {
        res.statusCode.should.equal(200)
        res.should.be.json()
        res.body[0].id.should.be.equal(1)
        res.body[1].id.should.be.equal(4)
        res.body[2].id.should.be.equal(29)
        done()
      })
  })

  it('should return a 400 validation error if incorrect param is passed', function (done) {
    request(app)
      .get('/v2/beers/?abv_gt=-1')
      .end(function(err, res) {
        res.statusCode.should.equal(400)
        res.should.be.json()
        res.body.should.be.a.Object()
        res.body.should.containEql({statusCode: 400})
        done()
      })
  })

  // Add spec for idsfilter
})
