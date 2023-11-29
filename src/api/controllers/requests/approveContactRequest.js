const RequestModel = require("../../../models/Request");
const approveContactRequest = async (req, res) => {
  try {
    const id = req?.query?.id;
    const result = await RequestModel.updateOne(
      { _id: id },
      {
        $set: {
          status: "approved",
        },
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = approveContactRequest;
