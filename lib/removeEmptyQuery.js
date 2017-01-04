const omitBy = require('lodash/omitBy')
const isEmpty = require('lodash/isEmpty')

const removeEmptyQuery = (query) => {
  return omitBy(query, isEmpty)
}

module.exports = removeEmptyQuery
