let express = require("express");
let cookieParser = require("cookie-parser");
let userRouter = require("../database/potluck/routers/user-router");
let guestRouter = require("../database/guests/routers/guest-router");

let server = express();

server.use(express.json());
server.use(cookieParser());
server.use(userRouter);
server.use(guestRouter);

module.exports = server;
