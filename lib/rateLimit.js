const RateLimit = require('express-rate-limit')
const ms = require('ms')

const rateLimit = new RateLimit({
  windowMs: ms('1h'),
  max: 3600,
  delayMs: 0,
  handler: failHandler
})

function failHandler (req, res, next) {
  return next({code: 429})
}

module.exports = rateLimit
