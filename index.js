const system = require('./system/system')
const express = require('express')
const httpProxy = require('http-proxy')
const winston = require('winston')
const rateLimit = require('./lib/rateLimit')

const app = express()
const apiV1Proxy = httpProxy.createProxyServer()

app.use(require('helmet')())
app.use(require('express-validator')())

// This code will be removed on February 15th 2017, which will be when V1 of the API is shut down
app.get('/api/v1/*', function (req, res) {
  apiV1Proxy.web(req, res, { target: 'https://punkapi.com', secure: false })
})

app.use('/v2', rateLimit, require('./routes'))
app.use('*', (req, res, next) => next({code: 404}))

app.use(require('./lib/errorHandler'))

const server = app.listen(system.getPort(), function (error) {
  if (error) throw error

  process.once('SIGTERM', system.shutdown(server))
  winston.info(`Listening on localhost:${server.address().port}`)
})

module.exports = app
