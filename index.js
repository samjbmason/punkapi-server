const system = require('./system')
const express = require('express')
const sentry = require('./lib/sentry')
const useCors = require('./lib/cors')
const rateLimit = require('./lib/rateLimit')
const { errorHandler, notFoundError } = require('./lib/errorHandler')

const app = express()

sentry.config()

app.use(sentry.reqHandler())

app.use(require('helmet')())
app.use(require('express-validator')())

app.use('/v2', useCors(), rateLimit, require('./routes'))
app.use('*', (req, res, next) => next(notFoundError(`No endpoint found that matches '${req.originalUrl}'`)))

app.use(sentry.errHandler())

app.use(errorHandler)

const server = app.listen(system.getPort(), function (error) {
  if (error) throw error

  process.once('SIGTERM', system.shutdown(server))
  console.info(`Listening on http://localhost:${server.address().port}`)
})

module.exports = app
