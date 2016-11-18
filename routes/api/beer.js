const db = require('punkapi-db');
const nth = require('lodash/nth');

// Schema
const schema = {
  beerId: {
    isInt: { options: { min: 1 } }
  }
};

function beer(req, res) {
  req.checkParams(schema);

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  }

  const { beerId } = req.params;
  const selectedBeer = nth(db, beerId);

  res.status(200);
  res.json(selectedBeer);
};

module.exports = beer;
