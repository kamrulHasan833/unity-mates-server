const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  const unmodifiedToken = req?.headers?.authorization;
  const secret = process.env.JWT_SECRET;
  const token = unmodifiedToken ? unmodifiedToken.split(" ")[1] : null;

  if (token) {
    jwt.verify(token, secret, (error, decode) => {
      if (error) {
        res.status(401).json({ message: "unauthorized access request." });
      } else {
        req.currentUser = decode;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "unauthorized access request." });
  }
};

module.exports = verifyUser;
