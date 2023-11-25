const Biodata = require("../../../models/Biodata");
const getAllMBiodata = async (req, res) => {
  console.log("hi");
  try {
    const result = await Biodata.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getAllMBiodata;
