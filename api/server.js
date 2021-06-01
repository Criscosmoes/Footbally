const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// import user routes

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

module.exports = server;
