const punkapi = require('punkapi-lib')

const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const schema = buildSchema(`
  type Measurement {
    value: Float
    unit: String
  }

  type Temp {
    temp: Measurement
    duration: Int
  }

  type Method {
    mash_temp: [Temp]
    fermentation: Temp
    twist: String
  }

  type Malt {
    name: String
    amount: Measurement
  }

  type Hop {
    name: String
    amount: Measurement
    add: String
    attribute: String
  }

  type Ingredients {
    malt: [Malt]
    hops: [Hop]
    yeast: String
  }

  type Beer {
    id: Int!
    name: String!
    tagline: String!
    first_brewed: String!
    description: String!
    image_url: String!
    abv: Float
    target_fg: Float
    target_og: Float
    ebc: Float
    srm: Float
    ph: Float
    attenuation_level: Int
    volume: Measurement
    boil_volume: Measurement
    method: Method
    ingredients: Ingredients
    food_pairing: [String]
    brewers_tips: String
    contributed_by: String
  }

  type Query {
    random: Beer,
    beer(id: Int!): Beer
    beers(abv_gt: Int,
    abv_lt: Float,
    ibu_gt: Float,
    ibu_lt: Float,
    ebc_gt: Float,
    ebc_lt: Float,
    beer_name: String,
    yeast: String,
    brewed_before: String,
    brewed_after: String,
    hops: String,
    malt: String,
    food: String,
    ids: String): [Beer]
  }
`)

// Root provides a resolver function for each API endpoint
const root = {
  random: () => punkapi.random()[0],
  beer: ({ id }) => punkapi.beer(id)[0],
  beers: args =>
    punkapi.beers({
      ...args
    })
}

const graphqlEndpoint = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
})

module.exports = graphqlEndpoint
