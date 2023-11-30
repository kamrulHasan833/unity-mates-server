const UserModel = require("../../../models/Users");
const BiodataModel = require("../../../models/Biodata");

const makePremium = async (req, res) => {
  try {
    const query = req?.query;
    const email = query?.email;
    const premium_request_status = query?.premium_request_status;

    let result = await UserModel.updateOne(
      { email: email },
      {
        $set: {
          user_type: "premium",
        },
      }
    );
    console.log(result, premium_request_status);
    if (result.modifiedCount > 0 && premium_request_status) {
      result = await BiodataModel.updateOne(
        { email: email },
        {
          $set: {
            member_type: "premium",
            premium_request_status: "approved",
          },
        },
        { upsert: true }
      );
    } else {
      result = await BiodataModel.updateOne(
        { email: email },
        {
          $set: {
            member_type: "premium",
          },
        },
        { upsert: true }
      );
    }
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = makePremium;
