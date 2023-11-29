const RequestModel = require("../../../models/Request");
const getAllRequestsOfAUser = async (req, res) => {
  try {
    const email = req?.query?.email;
    const result = await RequestModel.find({ self_email: email });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getAllRequestsOfAUser;
