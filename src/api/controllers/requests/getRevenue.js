const RequestModel = require("../../../models/Request");
const getRevenue = async (req, res) => {
  try {
    const result = await RequestModel.aggregate([
      {
        $group: {
          _id: null,
          revenue: {
            $sum: "$price",
          },
        },
      },
    ]);

    res
      .status(200)
      .json({ revenue: result[0].revenue, title: "total revenue" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getRevenue;
