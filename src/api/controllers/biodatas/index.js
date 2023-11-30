const getAllBiodatas = require("../biodatas/getAllBiodatas");
const getAllByQuery = require("./getAllByQuery");
const getBiodataSize = require("./getBiodataSize");
const getBiodataById = require("./getBiodataById");
const getABiodataByEmail = require("./getABiodataByEmail");
const createABiodata = require("./createABiodata");
const getPremiumRequests = require("./getPremiumRequests");
module.exports = {
  getAllBiodatas,
  getAllByQuery,
  getBiodataSize,
  getBiodataById,
  getABiodataByEmail,
  createABiodata,
  getPremiumRequests,
};
