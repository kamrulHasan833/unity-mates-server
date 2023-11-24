const errorHandleMiddleware = (error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    errors: error.errors,
  });
};
module.exports = errorHandleMiddleware;
