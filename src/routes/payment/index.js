const express = require("express");
const paymentRouter = express.Router();
const getPaymentClientSecret = require("../../api/controllers/payment/getPaymentClientSecret");
// get client secret
paymentRouter.post(
  "/unity-mates/v1/payments/client-secret",
  getPaymentClientSecret
);
module.exports = paymentRouter;
