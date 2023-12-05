const UserModel = require("../../../models/Users");

const getUsersByName = async (req, res) => {
  try {
    const name = req?.query?.name;

    const query = {
      name: {
        $regex: new RegExp(name, "i"),
      },
    };

    const result = await UserModel.find(query);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getUsersByName;
