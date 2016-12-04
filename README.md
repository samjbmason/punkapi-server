# PunkAPI - Server [![Build Status](https://travis-ci.org/samjbmason/punkapi-server.svg?branch=master)](https://travis-ci.org/samjbmason/punkapi-server)

The PunkAPI server is a pretty simple Express app, its takes the data from `punkapi-db` and provides a set of filters and endpoints for the queries.

The data itself is stored in the [punkapi-db](https://github.com/samjbmason/punkapi-db) repository and is available on npm as `punkapi-db`.

## To run locally
Clone the repo `$ git clone https://github.com/samjbmason/punkapi-server`

Then run `$ npm i` and to spin up a local server run `$ npm run dev`, the site should now be available at `http://localhost:3333`

## Deploying
Probably not very useful for anyone else!

- Run `$ npm run deploy`
- Run `$ npm run alias` to realias the domain to `api.punkapi.com`
