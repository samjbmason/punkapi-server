const system = require('./system/system')
const express = require('express')
const winston = require('winston')
const rateLimit = require('./lib/rateLimit')

const app = express()

app.use(require('helmet')())
app.use(require('express-validator')())

app.use('/', rateLimit, require('./routes'))
app.use('*', (req, res, next) => next({code: 404}))

app.use(require('./lib/errorHandler'))

const server = app.listen(system.getPort(), function (error) {
  if (error) throw error

  process.once('SIGTERM', system.shutdown(server))
  winston.info(`Listening on localhost:${server.address().port}`)
})

module.exports = app
