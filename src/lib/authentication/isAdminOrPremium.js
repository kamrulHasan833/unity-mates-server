const UserModel = require("../../models/Users");
const isAdminOrPremium = async (req, res) => {
  const currentUser = req?.currentUser;
  const requestedUserEmail = req?.query?.email;

  const { email } = currentUser ? currentUser : {};
  const emailToFilter = email ? email : requestedUserEmail;
  try {
    const res = await UserModel.findOne({ email: emailToFilter });

    const { user_type } = res ? res : {};
    const isAdmin = user_type && user_type === "admin" ? true : false;
    const isPremium = user_type && user_type === "premium" ? true : false;

    return { isAdmin, isPremium };
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = isAdminOrPremium;
