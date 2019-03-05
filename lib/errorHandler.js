const Boom = require('boom')

function validationError(validationErrors) {
  const error = Boom.badRequest('Invalid query params')
  error.output.payload.data = validationErrors
  return error
}

function notFoundError(msg) {
  return Boom.notFound(msg)
}

function tooManyRequestsError() {
  return Boom.tooManyRequests(
    'You have reached your limit on this ip address please wait an hour'
  )
}

function errorHandler(err, req, res, next) {
  console.log(err)
  var boomError = Boom.boomify(err)
  if (boomError.isServer) {
    boomError.output.payload.message =
      'Something has gone wrong on our end please try again, if the problem persists email sam.jbmason+punkapi@gmail.com'
  }

  res.status(boomError.output.statusCode)
  res.send(boomError.output.payload)
}

module.exports = {
  errorHandler,
  notFoundError,
  validationError,
  tooManyRequestsError
}
