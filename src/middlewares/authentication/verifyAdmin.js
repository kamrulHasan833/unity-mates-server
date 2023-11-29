const verifyAdmin = async (req, res, next) => {
  const currentUser = req?.currentUser;

  const { email } = currentUser ? currentUser : {};

  try {
    const result = await UserModel.findOne({ email: email });

    const { role } = result ? result : {};
    const isAdmin = role && role === "admin" ? true : false;
    if (isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "forbidded access request." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = verifyAdmin;
