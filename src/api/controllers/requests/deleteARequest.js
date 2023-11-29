const RequestModel = require("../../../models/Request");
const deleteARequest = async (req, res) => {
  try {
    const id = req?.query?.id;
    const result = await RequestModel.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = deleteARequest;
