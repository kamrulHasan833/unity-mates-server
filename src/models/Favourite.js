const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  biodata_id: {
    type: Number,
    required: true,
  },
  self_biodata_id: {
    type: Number,
  },
  permanent_address: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const FavouriteModel = mongoose.model("Fovourite", schema);
module.exports = FavouriteModel;
