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
  
  const total = db.length
  const pages = parseInt(Math.ceil(total / perPage) || 1)

  return {
    data: slice(db, offset, offset + parsedPerPage),
    total: db.length,
    per_page: parsedPerPage,
    page: parsedPageNumber,
    pages: pages,
  }
};

module.exports = paginate
