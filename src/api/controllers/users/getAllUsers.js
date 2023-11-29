const UserModel = require("../../../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserModel.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getAllUsers;
