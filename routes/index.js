const express = require('express')
const routes = express.Router()

routes.get('/beers/random', require('./api/random'))
routes.get('/beers/:beerId', require('./api/beer'))
routes.get('/beers', require('./api/beers'))

module.exports = routes
