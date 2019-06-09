// Import variables
const express = require('express')
const router = express.Router()
const requestify = require('requestify')
const config = require('../../config.json')

// Send false if there is no user queried (we will not get every single league user ktnx)
router.get('/', (req, res) => {
  res.status(404)
  res.send('Not Found')
})

// Gets details of a specific league player using their username
router.get('/:username', (req, res) => {
  const url = `
    https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      req.params.username
    }?api_key=${config.APIKEY}
    `
  console.log(url)
  requestify.get(url).then(response => {
    if (response) {
      res.send(response.getBody())
    } else {
      res.status(404)
      res.send('Not Found')
    }
  })
})

module.exports = router
