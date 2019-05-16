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
    isFloat: { options: { min: 0 } }
  },
  abv_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isFloat: { options: { min: 0 } }
  },
  ibu_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isFloat: { options: { min: 0 } }
  },
  ibu_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isFloat: { options: { min: 0 } }
  },
  ebc_gt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isFloat: { options: { min: 0 } }
  },
  ebc_lt: {
    errorMessage: 'Must be a number greater than 0',
    optional: true,
    isFloat: { options: { min: 0 } }
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
    errorMessage:
      'Must have a value and if you are using multiple words use underscores to separate',
    optional: true,
    notEmpty: true
  },
  hops: {
    errorMessage:
      'Must have a value and if you are using multiple words use underscores to separate',
    optional: true,
    notEmpty: true
  },
  malt: {
    errorMessage:
      'Must have a value and if you are using multiple words use underscores to separate',
    optional: true,
    notEmpty: true
  },
  yeast: {
    errorMessage:
      'Must have a value and if you are using multiple words use underscores to separate',
    optional: true,
    notEmpty: true
  },
  food: {
    errorMessage:
      'Must have a value and if you are using multiple words use underscores to separate',
    optional: true,
    notEmpty: true
  }
}

module.exports = schema
