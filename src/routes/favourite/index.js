const {
  createAFavourite,
  getAllFavouriteBiodata,
  deleteAFavourite,
} = require("../../api/controllers/Favourite/index");
const express = require("express");
const verifyUser = require("../../middlewares/authentication/verifyUser");
const favouriteRouter = express.Router();

// get all  favourites
favouriteRouter.get(
  "/unity-mates/v1/favourites",
  verifyUser,
  getAllFavouriteBiodata
);

// create a favourite
favouriteRouter.post(
  "/unity-mates/v1/favourites",
  verifyUser,
  createAFavourite
);

// delete a favourite
favouriteRouter.delete(
  "/unity-mates/v1/favourites",
  verifyUser,
  deleteAFavourite
);
module.exports = favouriteRouter;
