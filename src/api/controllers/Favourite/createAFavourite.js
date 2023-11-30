const FavouriteModel = require("../../../models/Favourite");

const createAFavourite = async (req, res) => {
  try {
    const favouriteInfo = req?.body;
    const {
      name,
      biodata_id,
      self_biodata_id,
      permanent_address,
      occupation,
      email,
    } = favouriteInfo;
    const payload = {
      name,
      biodata_id,
      self_biodata_id,
      permanent_address,
      occupation,
      email,
    };

    const newFavourite = new FavouriteModel(payload);
    const result = await newFavourite.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = createAFavourite;
