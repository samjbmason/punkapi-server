const system = require('../system')
const Raven = require('raven')

function config () {
  Raven.disableConsoleAlerts()
  return Raven.config(system.isDev() && system.getSentryKey()).install()
}

function reqHandler () {
  return Raven.requestHandler()
}

function errHandler () {
  return Raven.errorHandler()
}

exports.config = config
exports.reqHandler = reqHandler
exports.errHandler = errHandler
