const express = require('express');
const routes = express.Router();
const apiRoutes = express.Router();

apiRoutes.get('/beers/random', require('./api/random'));
apiRoutes.get('/beers/:beerId', require('./api/beer'));
apiRoutes.get('/beers', require('./api/beers'));
routes.post('/signup', require('./signup'));

module.exports = { routes, apiRoutes };
