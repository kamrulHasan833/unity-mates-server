const RequestModel = require("../../../models/Request");
const getAllRequests = async (req, res) => {
  try {
    const result = await RequestModel.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getAllRequests;
