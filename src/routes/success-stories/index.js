const express = require("express");
const router = express.Router();
const { getAll } = require("../../api/controllers/success-stories/index");

router.get("/unity-mates/v1/success-stories", getAll);
module.exports = router;
