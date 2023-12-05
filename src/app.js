// external modules
const express = require("express");
const {
  commonMiddleware,
  errorHandleMiddleware,
} = require("../src/middlewares/index");

// internal router mudules
const path = require("path");
const {
  biodataRouter,
  successStoryRouter,
  userRouter,
  authRouter,
  requestRouter,
  paymentRouter,
  favouriteRouter,
} = require("./routes/index");

// create app
const app = express();

// common middlewares
commonMiddleware(app, express);

//set public folder
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// routers and routes
app.get("/", (req, res) => {
  res.send("unity mates is running");
});
app.use(biodataRouter);
app.use(successStoryRouter);
app.use(userRouter);
app.use(authRouter);
app.use(requestRouter);
app.use(paymentRouter);
app.use(favouriteRouter);

// handle all not found routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on server!`);
  error.status = 404;

  next(error);
});

// error handle midlleware
app.use(errorHandleMiddleware);

module.exports = app;
