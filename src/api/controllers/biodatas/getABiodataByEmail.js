const BiodataModel = require("../../../models/Biodata");
const getABiodataByEmail = async (req, res) => {
  try {
    const email = req?.query?.email;
    const result = await BiodataModel.findOne({ email: email });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getABiodataByEmail;
