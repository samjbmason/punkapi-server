const GS = require('gosquared')
const system = require('../system')
const gs = new GS({
  site_token: process.env.GS_SITE_TOKEN,
  api_key: process.env.GS_API_KEY
})

function trackEvent (name) {
  if (system.isDev()) return
  gs.trackEvent(name)
}

module.exports = trackEvent
