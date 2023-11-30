const BiodataModel = require("../../../models/Biodata");

const getPremiumRequests = async (req, res) => {
  try {
    const result = await BiodataModel.find({
      premium_request_status: {
        $in: ["approved", "pending"],
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getPremiumRequests;
