const express = require('express');

const server = express();

const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/user-router.js");
const restricedMiddleware = require("../auth/restricted-middleware.js")

server.use(express.json());

server.use('/api/auth/', authRouter);
server.use('/api/users',restricedMiddleware,userRouter);

server.get("/", (req, res) => {
    res.status(200).json({api:"up"})
})


module.exports = server;