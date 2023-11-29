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

// get all  requests
requestRouter.get("/unity-mates/v1/requests", getAllRequests);

// get all  requests of user
requestRouter.get("/unity-mates/v1/requests/user", getAllRequestsOfAUser);

// create a request
requestRouter.post("/unity-mates/v1/requests", createARequest);

// approve contact request
requestRouter.put("/unity-mates/v1/requests", approveContactRequest);

// delete a request
requestRouter.delete("/unity-mates/v1/requests", deleteARequest);

// get total revenue
requestRouter.get("/unity-mates/v1/requests/revenue", getRevenue);
// get total expense
requestRouter.get("/unity-mates/v1/requests/expense", getExpenseOfUser);

module.exports = requestRouter;
