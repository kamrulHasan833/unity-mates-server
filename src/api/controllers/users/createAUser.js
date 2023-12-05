const UserModel = require("../../../models/Users");

const createAUser = async (req, res) => {
  try {
    const user = req?.body;

    const { name, avatar, user_type, email } = user ? user : {};
    const modifiedUserType = user_type === "premium" ? "ordinary" : user_type;
    const payload = email
      ? { name, avatar, email, user_type: modifiedUserType, role: "ordinary" }
      : null;

    // find user already created
    const result = await UserModel.findOne({ email: email });
    const isUser = result?.email ? true : false;

    if (isUser) {
      res.status(200).json({ message: "user already exist", status: 409 });
    } else {
      const newUser = new UserModel(payload);
      const result1 = await newUser.save();

      res.status(200).json(result1);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = createAUser;
