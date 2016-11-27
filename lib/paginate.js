const slice = require('lodash/slice')

function paginate (db, req) {
  const { page, per_page } = req.query
  /* eslint-disable camelcase */
  const perPage = per_page || 25
  /* eslint-enable camelcase */
  const pageNumber = page || 1

  const parsedPerPage = parseInt(perPage)
  const parsedPageNumber = parseInt(pageNumber)

  const offset = (parsedPageNumber - 1) * parsedPerPage

  return slice(db, offset, offset + parsedPerPage)
};

module.exports = paginate
