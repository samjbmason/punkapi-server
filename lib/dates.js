const moment = require('moment')

function isDateBefore (brewDate, predicate) {
  const parsedBrewDate = moment(brewDate, 'MM/YYYY')
  const parsedPredicate = moment(predicate, 'MM-YYYY')

  return parsedBrewDate.isBefore(parsedPredicate)
}

function isDateAfter (brewDate, predicate) {
  const parsedBrewDate = moment(brewDate, 'MM/YYYY')
  const parsedPredicate = moment(predicate, 'MM-YYYY')

  return parsedBrewDate.isAfter(parsedPredicate)
}

exports.isDateAfter = isDateAfter
exports.isDateBefore = isDateBefore
