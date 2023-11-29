const { createAFavourite } = require("../../api/controllers/Favourite/index");
const express = require("express");
const favouriteRouter = express.Router();

// create a favourite
favouriteRouter.post("/unity-mates/v1/favourites", createAFavourite);
module.exports = favouriteRouter;
