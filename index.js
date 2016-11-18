const system = require('./system/system')
const express = require('express')
const winston = require('winston')

const app = express()

app.use(require('helmet')())
app.use(require('express-validator')())

app.use('/', require('./routes').routes)
app.use('/api', require('./routes').apiRoutes)

app.use(require('./lib/errorHandler').errorHandler)

const server = app.listen(system.getPort(), function (error) {
  if (error) {
    throw error
  }
  process.once('SIGTERM', system.shutdown(server))
  winston.info(`Listening on localhost:${server.address().port}`)
})
