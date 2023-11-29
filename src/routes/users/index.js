const express = require("express");
const userRouter = express.Router();
const { createAUser } = require("../../api/controllers/users/index");
// create a user
userRouter.post("/unity-mates/v1/users", createAUser);
module.exports = userRouter;
