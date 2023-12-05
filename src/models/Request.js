const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  self_name: {
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

  status: {
    type: String,
    required: true,
    enum: ["approve", "pending"],
  },
  mobile_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  self_email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transection_id: {
    type: String,
    required: true,
  },
});

const RequestModel = mongoose.model("Request", schema);
module.exports = RequestModel;
