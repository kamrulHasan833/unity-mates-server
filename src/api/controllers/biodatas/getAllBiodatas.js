const Biodata = require("../../../models/Biodata");
const parseNumber = require("../../../utils/parseNumber");
const getAllMBiodata = async (req, res) => {
  try {
    const query = req?.query;
    const limit = parseNumber(query?.limit);
    const skip = parseNumber(query?.skip);

    const result = await Biodata.find().skip(skip).limit(limit);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getAllMBiodata;
