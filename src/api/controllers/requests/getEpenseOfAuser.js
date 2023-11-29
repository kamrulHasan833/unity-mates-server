const RequestModel = require("../../../models/Request");
const getExpenseOfUser = async (req, res) => {
  try {
    const email = req?.query?.email;

    const result = await RequestModel.aggregate([
      {
        $match: {
          self_email: email,
        },
      },
      {
        $group: {
          _id: "$self_email",
          expense: {
            $sum: "$price",
          },
        },
      },
    ]);

    const expense = result[0]?.expense;
    res
      .status(200)
      .json({ expense: expense ? expense : 0, title: "total expense" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = getExpenseOfUser;
