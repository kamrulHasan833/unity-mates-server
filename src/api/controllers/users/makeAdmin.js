const UserModel = require("../../../models/Users");

const makeAdmin = async (req, res) => {
  try {
    const email = req?.query?.email;
    const result = await UserModel.updateOne(
      { email: email },
      {
        $set: {
          role: "admin",
        },
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = makeAdmin;
