const RequestModel = require("../../../models/Request");

const createARequest = async (req, res) => {
  try {
    const requestInfo = req?.body;
    const {
      name,
      biodata_id,
      self_biodata_id,
      mobile_no,
      email,
      self_email,
      price,
      transection_id,
      self_name,
    } = requestInfo ? requestInfo : {};

    const payload = {
      name,
      self_name,
      biodata_id,
      self_biodata_id: self_biodata_id ? self_biodata_id : 0,
      mobile_no,
      email,
      self_email,
      status: "pending",
      price,
      transection_id,
    };

    const newRequest = new RequestModel(payload);
    const result = await newRequest.save();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err?.message });
  }
};

module.exports = createARequest;
