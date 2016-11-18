const Boom = require('boom')

function validationError (errors) {
  const error = Boom.badRequest('Invalid query params', errors)
  error.output.payload.data = error.data
  return error
}

function errorHandler (err, req, res, next) {
  console.log(err)
  const { output } = err
  res.status(output.statusCode || 500)
  res.send(output.payload)
}

module.exports = { validationError, errorHandler }
