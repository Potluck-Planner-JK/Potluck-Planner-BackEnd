let supertest = require("supertest");
let server = require("../api/server");
let data = require("../database/dbConfig");

afterAll(async () => {
    await data.destroy();
  });