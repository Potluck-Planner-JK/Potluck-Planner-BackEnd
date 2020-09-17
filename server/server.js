let express = require("express");

let server = express()

server.use(express.json())

module.exports = server