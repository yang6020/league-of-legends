// Import variables
const express = require('express')
const router = express.Router()
const requestify = require('requestify')
const config = require('../../config.json')

// Gets details of a specific league player using their username
router.get('/:username', (req, res) => {
  const url = `
    https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      req.params.username
    }?api_key=${config.APIKEY}
    `
  requestify.get(url).then(response => {
    res.send(response.getBody())
  })
})

module.exports = router
