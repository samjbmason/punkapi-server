const schema = {
  page: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 1 } }
  },
  per_page: {
    errorMessage: 'Must be a number greater than 0 and less than 80',
    optional: true,
    isInt: { options: { min: 1, max: 80 } }
  },
  abv_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  abv_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ibu_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ibu_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ebc_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  ebc_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isInt: { options: { min: 0 } }
  },
  brewed_before: {
    errorMessage: 'Must be in date format of mm/yyyy',
    optional: true,
    matches: /[0-1][1-9]-\d{4}\b/

  },
  brewed_after: {
    errorMessage: 'Must be in date format of mm/yyyy',
    optional: true,
    matches: /[0-1][1-9]-\d{4}\b/
  },
  beer_name: {
    errorMessage: 'Must be text and if using multiple words use underscores',
    optional: true
  },
  hops: {
    errorMessage: 'Must be text and if using multiple words use underscores',
    optional: true
  },
  malt: {
    errorMessage: 'Must be text and if using multiple words use underscores',
    optional: true
  },
  yeast: {
    errorMessage: 'Must be text and if using multiple words use underscores',
    optional: true
  },
  food: {
    errorMessage: 'Must be text and if using multiple words use underscores',
    optional: true
  }
}

module.exports = schema
