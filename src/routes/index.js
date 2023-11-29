const biodataRouter = require("./biodata/index");
const successStoryRouter = require("./success-stories/index");
const userRouter = require("./users/index");
const authRouter = require("./authentication/index");
const requestRouter = require("./request/index");
const paymentRouter = require("./payment/index");
module.exports = {
  biodataRouter,
  successStoryRouter,
  userRouter,
  authRouter,
  requestRouter,
  paymentRouter,
};
