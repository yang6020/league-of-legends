const express = require('express')
const config = require('../config.json')

const app = express()

app.get('/ping', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Connection successful'
  })
})

const Port = config.PORT

app.listen(Port, () => {
  console.log(`server running on port ${Port}`)
})
