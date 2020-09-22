let express = require("express");
let cors = require("cors");
let helmet = require("helmet");

let cookieParser = require("cookie-parser");
let userRouter = require("./database/potluck/routers/user-router");
let guestRouter = require("./database/guests/routers/guest-router");

let server = express();

server.use(helmet());
server.use(cors());

server.use(express.json());
server.use(cookieParser());
server.use(userRouter);
server.use(guestRouter);

module.exports = server;
