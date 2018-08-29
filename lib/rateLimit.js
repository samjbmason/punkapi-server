const rateLimit = require('express-rate-limit')
const ms = require('ms')
const { tooManyRequestsError } = require('./errorHandler')

const rateLimiter = rateLimit({
  windowMs: ms('1h'),
  max: 3600,
  delayMs: 0,
  handler: failHandler
})

function failHandler(req, res, next) {
  return next(tooManyRequestsError())
}

module.exports = rateLimiter
