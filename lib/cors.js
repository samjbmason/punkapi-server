const cors = require('cors')

const corsOpts = {
  origin: '*',
  credentials: true,
  exposedHeaders: 'x-ratelimit-limit,x-ratelimit-remaining,content-length,origin,content-type,accept'
}

function useCors () {
  return cors(corsOpts)
}

module.exports = useCors
