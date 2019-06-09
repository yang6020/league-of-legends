// Imports
const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config.json')
const users = require('./routes/users')

// Server setup
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Env Variables
const Port = config.PORT

// Routes
app.use('/users', users)

app.listen(Port, () => {
  console.log(`server running on port ${Port}`)
})
