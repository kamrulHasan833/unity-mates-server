const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  self_biodata_id: { type: Number, required: true },
  patner_biodata_id: {
    type: Number,
    required: true,
  },
  couple_image: {
    type: String,
    required: true,
  },
  success_story: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const SuccessStoryModel = mongoose.model("Success-story", schema);
module.exports = SuccessStoryModel;
