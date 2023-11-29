const SuccessStoryModel = require("../../../models/SuccessStory");
const { get } = require("../../../routes/biodata");
const getAll = async (req, res) => {
  try {
    const result = await SuccessStoryModel.find().sort({ marriage_date: -1 });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getAll;
