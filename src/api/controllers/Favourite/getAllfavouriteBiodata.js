const FavouriteModel = require("../../../models/Favourite");
const getAllFavouriteBiodata = async (req, res) => {
  try {
    const email = req?.query?.email;
    const result = await FavouriteModel.find({ email });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = getAllFavouriteBiodata;
