const FavouriteModle = require("../../../models/Favourite");
const deleteAFavourite = async (req, res) => {
  try {
    const id = req?.query?.id;
    const result = await FavouriteModle.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = deleteAFavourite;
