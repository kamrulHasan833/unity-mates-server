const express = require("express");
const requestRouter = express.Router();
const {
  createARequest,
  getRevenue,
  getAllRequests,
  approveContactRequest,
  getExpenseOfUser,
  getAllRequestsOfAUser,
  deleteARequest,
} = require("../../api/controllers/requests/index");
const verifyUser = require("../../middlewares/authentication/verifyUser");
const verifyAdmin = require("../../middlewares/authentication/verifyAdmin");

// get all  requests
requestRouter.get(
  "/unity-mates/v1/requests",
  verifyUser,
  verifyAdmin,
  getAllRequests
);

// get all  requests of user
requestRouter.get(
  "/unity-mates/v1/requests/user",
  verifyUser,
  getAllRequestsOfAUser
);

// create a request
requestRouter.post("/unity-mates/v1/requests", verifyUser, createARequest);

// approve contact request
requestRouter.put(
  "/unity-mates/v1/requests",
  verifyUser,
  verifyAdmin,
  approveContactRequest
);

// delete a request
requestRouter.delete("/unity-mates/v1/requests", verifyUser, deleteARequest);

// get total revenue
requestRouter.get(
  "/unity-mates/v1/requests/revenue",
  verifyUser,
  verifyAdmin,
  getRevenue
);

// get total expense
requestRouter.get(
  "/unity-mates/v1/requests/expense",
  verifyUser,
  getExpenseOfUser
);

module.exports = requestRouter;
