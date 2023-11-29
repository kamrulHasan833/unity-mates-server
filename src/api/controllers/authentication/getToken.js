const jwt = require("jsonwebtoken");

// get jwt token
const getToken = (req, res) => {
  const secret = process.env.JWT_SECRET;
  const info = req?.body;
  const { username, email, avater } = info ? info : {};
  const payload = { username, email, avater };
  const token = jwt.sign(payload, secret, {
    expiresIn: "1h",
  });
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = getToken;
