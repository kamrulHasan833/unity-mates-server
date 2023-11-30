const express = require("express");
const userRouter = express.Router();
const {
  createAUser,
  getAllUsers,
  makePremium,
  makeAdmin,
} = require("../../api/controllers/users/index");
const verifyUser = require("../../middlewares/authentication/verifyUser");
const verifyAdmin = require("../../middlewares/authentication/verifyAdmin");
// get all users
userRouter.get("/unity-mates/v1/users", verifyUser, verifyAdmin, getAllUsers);

// create a user
userRouter.post("/unity-mates/v1/users", createAUser);

// updata  a user type
userRouter.put(
  "/unity-mates/v1/users/type",
  verifyUser,
  verifyAdmin,
  makePremium
);

// updata  a user role
userRouter.put(
  "/unity-mates/v1/users/role",
  verifyUser,
  verifyAdmin,
  makeAdmin
);
module.exports = userRouter;
