var _isDev = process.env.NODE_ENV !== 'production'

require('dotenv').config({ silent: true })

const ms = require('ms')
const SHUTDOWN_TIMEOUT = ms('10s')

function isDev() {
  return _isDev
}

function getPort() {
  return process.env.PORT || 3333
}

function shutdown(server) {
  return server => {
    console.info('Closing active connections')
    server.close(process.exit)

    setTimeout(function() {
      console.info(
        `Could not close active connections in ${ms(SHUTDOWN_TIMEOUT, {
          long: true
        })}, shutting down.`
      )
      process.exit()
    }, SHUTDOWN_TIMEOUT)
  }
}

exports.isDev = isDev
exports.getPort = getPort
exports.shutdown = shutdown
exports.getSentryKey = getSentryKey
