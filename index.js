const system = require('./system/system')
const raven = require('raven')
const express = require('express')
const rateLimit = require('./lib/rateLimit')
const { errorHandler, notFoundError } = require('./lib/errorHandler')

const app = express()

if (!system.isDev()) {
  app.use(raven.middleware.express.requestHandler(system.getSentryKey()))
}

app.use(require('helmet')())
app.use(require('express-validator')())

app.use('/v2', rateLimit, require('./routes'))
app.use('*', (req, res, next) => next(notFoundError(`No endpoint found that matches '${req.originalUrl}'`)))

if (!system.isDev()) {
  app.use(raven.middleware.express.errorHandler(system.getSentryKey()))
}

app.use(errorHandler)

const server = app.listen(system.getPort(), function (error) {
  if (error) throw error

  process.once('SIGTERM', system.shutdown(server))
  console.info(`Listening on localhost:${server.address().port}`)
})

module.exports = app
