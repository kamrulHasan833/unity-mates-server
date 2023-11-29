const express = require("express");
const verifyUser = require("../../middlewares/authentication/verifyUser");
const {
  getAllBiodatas,
  getAllByQuery,
  getBiodataSize,
  getBiodataById,
  getABiodataByEmail,
} = require("../../api/controllers/biodatas/index");
const router = express.Router();

// get all biodatas
router.get("/unity-mates/v1/biodatas", getAllBiodatas);

// get biodatas by query
router.get("/unity-mates/v1/biodatas/query", getAllByQuery);

// get biodata by id
router.get("/unity-mates/v1/biodatas/single/:id", getBiodataById);

// get biodata by id
router.get("/unity-mates/v1/biodatas/single", getABiodataByEmail);

// get biodata size
router.get("/unity-mates/v1/biodatas/size", getBiodataSize);

module.exports = router;
