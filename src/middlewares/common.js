const cors = require("cors");
const commonMiddleware = (app, express) => {
  // middleware

  app.use(cors());
  app.use(express.json());
};
module.exports = commonMiddleware;
