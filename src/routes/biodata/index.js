const express = require("express");
const { getAllBiodatas } = require("../../api/controllers/biodatas/index");
const router = express.Router();

router.get("/unity-mates/v1/biodatas", getAllBiodatas);

module.exports = router;
