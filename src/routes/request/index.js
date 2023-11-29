const express = require("express");
const requestRouter = express.Router();
const { createARequest } = require("../../api/controllers/requests/index");

// create a request
requestRouter.post("/unity-mates/v1/requests", createARequest);

module.exports = requestRouter;
