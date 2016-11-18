var _isDev = process.env.NODE_ENV !== 'production'

require('dotenv').config({ silent: true })

const ms = require('ms')
const winston = require('winston')
const SHUTDOWN_TIMEOUT = ms('10s')

function isDev () {
  return _isDev
}

function getPort () {
  return process.env.PORT || 3333
}

function getMailgunAPIDetails () {
  return {
    domain: process.env.MAILGUN_DEV_DOMAIN,
    username: process.env.MAILGUN_DEV_USERNAME,
    password: process.env.MAILGUN_DEV_PASSWORD
  }
}

function shutdown (server) {
  return (server) => {
    winston.info('Closing active connections')
    server.close(process.exit)

    setTimeout(function () {
      winston.info(`Could not close active connections in ${ms(SHUTDOWN_TIMEOUT, { long: true })}, shutting down.`)
      process.exit()
    }, SHUTDOWN_TIMEOUT)
  }
}

exports.isDev = isDev
exports.getPort = getPort
exports.getMailgunAPIDetails = getMailgunAPIDetails
exports.shutdown = shutdown
