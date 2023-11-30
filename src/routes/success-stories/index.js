const express = require("express");
const router = express.Router();
const {
  getAll,
  createASuccessStory,
} = require("../../api/controllers/success-stories/index");

router.get("/unity-mates/v1/success-stories", getAll);
// create a success story
router.post("/unity-mates/v1/success-stories", createASuccessStory);
module.exports = router;
