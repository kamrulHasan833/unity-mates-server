const commonMiddleware = require("./common");
const errorHandleMiddleware = require("./errorHanldeMiddleware");
const verifyAdmin = require("./authentication/verifyAdmin");
module.exports = {
  commonMiddleware,
  errorHandleMiddleware,
  verifyAdmin,
};
