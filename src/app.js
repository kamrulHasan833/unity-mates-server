// external modules
const express = require("express");
const { commonMiddleware } = require("../src/middlewares/index");
const errorHandleMiddleware = require("./middlewares/ErrorHanldeMiddleware");
require("dotenv").config();

// create app
const app = express();
const port = process.env.PORT || 5000;

// common middlewares
commonMiddleware(app, express);

// routers and routes
app.get("/health", (req, res) => {
  res.send("unity mates is running");
});

// handle all not found routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on server!`);
  error.status = 404;

  next(error);
});

// error handle midlleware
app.use(errorHandleMiddleware);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
