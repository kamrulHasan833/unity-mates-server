const express = require("express");
const paymentRouter = express.Router();
const getPaymentClientSecret = require("../../api/controllers/payment/getPaymentClientSecret");
const verifyUser = require("../../middlewares/authentication/verifyUser");
// get client secret
paymentRouter.post(
  "/unity-mates/v1/payments/client-secret",
  verifyUser,
  getPaymentClientSecret
);
module.exports = paymentRouter;
