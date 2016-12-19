const schema = {
  beerId: {
    errorMessage: 'beerId must be a number and greater than 0',
    isInt: { options: { min: 1 } }
  }
}

module.exports = schema
