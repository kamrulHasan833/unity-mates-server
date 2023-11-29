const UserModel = require("../../../models/Users");
const getIsAdminOrPremium = async (req, res) => {
  const currentUser = req?.currentUser;
  const requestedUserEmail = req?.query?.email;
  const { email } = currentUser ? currentUser : {};
  const emailToFilter = email ? email : requestedUserEmail;
  try {
    const result = await UserModel.findOne({ email: emailToFilter });

    const { user_type, role } = result ? result : {};
    const isAdmin = role && role === "admin" ? true : false;
    const isPremium = user_type && user_type === "premium" ? true : false;
    res.status(200).json({ isAdmin, isPremium });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getIsAdminOrPremium;
