const SuccessStoryModel = require("../../../models/SuccessStory");
const createASuccessStory = async (req, res) => {
  try {
    const successInfo = req?.body;
    const {
      self_biodata_id,
      patner_biodata_id,
      couple_image,
      success_story,
      reviews,
    } = successInfo;
    const modifiedReview = reviews && parseInt(reviews) > 5 ? 5 : reviews;
    const payload = {
      self_biodata_id,
      patner_biodata_id,
      couple_image,
      success_story,
      reviews: modifiedReview,
    };

    const newSuccessStory = new SuccessStoryModel(payload);
    const result = await newSuccessStory.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = createASuccessStory;
