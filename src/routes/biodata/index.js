const express = require("express");
const verifyUser = require("../../middlewares/authentication/verifyUser");
const verifyAdmin = require("../../middlewares/authentication/verifyAdmin");
const {
  getAllBiodatas,
  getAllByQuery,
  getBiodataSize,
  getBiodataById,
  getABiodataByEmail,
  createABiodata,
  getPremiumRequests,
} = require("../../api/controllers/biodatas/index");
const router = express.Router();

// get all biodatas
router.get("/unity-mates/v1/biodatas", getAllBiodatas);

// get biodatas by query
router.get("/unity-mates/v1/biodatas/query", getAllByQuery);

// get  prmium request
router.get(
  "/unity-mates/v1/biodatas/query/premium-request",
  verifyUser,
  verifyAdmin,
  getPremiumRequests
);

// create biodata
router.post("/unity-mates/v1/biodatas", verifyUser, createABiodata);

// get biodata by id
router.get("/unity-mates/v1/biodatas/single/:id", getBiodataById);

// get biodata by id
router.get("/unity-mates/v1/biodatas/single", verifyUser, getABiodataByEmail);

// get biodata size
router.get("/unity-mates/v1/biodatas/size", getBiodataSize);

module.exports = router;
