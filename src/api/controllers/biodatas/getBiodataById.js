const Biodata = require("../../../models/Biodata");
const getBiodataById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Biodata.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getBiodataById;
