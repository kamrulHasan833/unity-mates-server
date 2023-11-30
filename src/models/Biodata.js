const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  biodata_type: { type: String, required: true },
  biodata_id: { type: Number, required: true },
  name: { type: String, required: true },
  profile_image: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  age: { type: Number, required: true },
  occupation: { type: String, required: true },
  race: { type: String, required: true },
  fathers_name: { type: String, required: true },
  mothers_name: { type: String, required: true },
  permanent_division_name: { type: String, required: true },
  present_division_name: { type: String, required: true },
  expected_partner_age: { type: Number, required: true },
  expected_partner_height: { type: Number, required: true },
  expected_partner_weight: { type: Number, required: true },
  email: { type: String, required: true },
  mobile_number: { type: String, required: true },
  premium_request_status: { type: String },
  member_type: {
    type: String,
    enum: ["ordinary", "premium"],
  },
});

const Biodatas = mongoose.model("Biodata", schema);
module.exports = Biodatas;
