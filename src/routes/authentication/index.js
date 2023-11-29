const express = require("express");
const authRouter = express.Router();
const {
  getToken,
  getIsAdminOrPremium,
} = require("../../api/controllers/authentication/indxe");

authRouter.get("/unity-mates/v1/auth", getIsAdminOrPremium);
authRouter.post("/unity-mates/v1/auth", getToken);

module.exports = authRouter;
