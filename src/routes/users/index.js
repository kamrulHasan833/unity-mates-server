const express = require("express");
const userRouter = express.Router();
const {
  createAUser,
  getAllUsers,
  makePremium,
  makeAdmin,
} = require("../../api/controllers/users/index");
// get all users
userRouter.get("/unity-mates/v1/users", getAllUsers);

// create a user
userRouter.post("/unity-mates/v1/users", createAUser);

// updata  a user type
userRouter.put("/unity-mates/v1/users/type", makePremium);

// updata  a user role
userRouter.put("/unity-mates/v1/users/role", makeAdmin);
module.exports = userRouter;
