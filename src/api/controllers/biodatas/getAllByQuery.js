const { filterBiodatas } = require("../../../lib/biodatas/index");
const getAllByQuery = async (req, res) => {
  filterBiodatas(req, res);
};

module.exports = getAllByQuery;
