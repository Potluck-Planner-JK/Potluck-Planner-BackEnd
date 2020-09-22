const knex = require("knex");

require("dotenv").config()

const knexConfig = require("../knexfile.js");
const env = process.env.DB_ENV || "development";
const db = knex(knexConfig[env]);
module.exports = db