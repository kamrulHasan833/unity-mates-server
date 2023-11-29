const UserModel = require("../../../models/Users");
const BiodataModel = require("../../../models/Biodata");

const makePremium = async (req, res) => {
  try {
    const email = req?.query?.email;
    const result = await UserModel.updateOne(
      { email: email },
      {
        $set: {
          user_type: "premium",
        },
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = makePremium;
