const BiodataModel = require("../../../models/Biodata");
const SuccessStoryModel = require("../../../models/SuccessStory");
const getBiodataSize = async (req, res) => {
  try {
    const totalBiodatas = await BiodataModel.estimatedDocumentCount();
    const femaleBiodatas = await BiodataModel.countDocuments({
      biodata_type: "female",
    });
    const maleBiodatas = await BiodataModel.countDocuments({
      biodata_type: "male",
    });
    const premiumBiodatas = await BiodataModel.countDocuments({
      member_type: "premium",
    });
    const successStories = await SuccessStoryModel.estimatedDocumentCount();
    res.status(200).json([
      { size: totalBiodatas, title: "total biodatas" },
      { size: femaleBiodatas, title: "female biodatas" },
      { size: maleBiodatas, title: "male biodatas" },
      { size: successStories, title: "marriages" },
      { size: premiumBiodatas, title: "premium biodatas" },
    ]);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getBiodataSize;
