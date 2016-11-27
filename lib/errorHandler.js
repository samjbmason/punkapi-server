const Boom = require('boom')

function validationError (req) {
  const validationErrors = req.validationErrors()
  const error = Boom.badRequest('Invalid query params')
  error.output.payload.data = validationErrors
  return error
}

function notFoundError (req, err) {
  const url = req.originalUrl
  const message = err.msg || `No endpoint found that matches '${url}'`
  return Boom.notFound(message)
}

function tooManyRequestsError () {
  return Boom.tooManyRequests('You have reached your limit on this ip address please wait an hour')
}

function internalServerError () {
  return Boom.internal('Something has gone wrong on our end please try again, if the problem persists email sam.jbmason+punkapi@gmail.com')
}

function errorHandler (err, req, res, next) {
  let chosenError
  switch (err.code) {
    case 400:
      chosenError = validationError(req)
      break
    case 404:
      chosenError = notFoundError(req, err)
      break
    case 429:
      chosenError = tooManyRequestsError()
      break
    default:
      chosenError = internalServerError()
  }

  const { output } = chosenError
  res.status(output.statusCode || 500)
  res.send(output.payload)
}

module.exports = errorHandler
