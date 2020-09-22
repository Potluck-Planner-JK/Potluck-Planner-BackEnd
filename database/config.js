const knex = require("knex");

require("dotenv").config()

const knexConfig = require("../knexfile.js");
const env = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[env]);