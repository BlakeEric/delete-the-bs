//app.js
const express = require('express')
const server = express()

require('../api')(server)

module.exports = server
