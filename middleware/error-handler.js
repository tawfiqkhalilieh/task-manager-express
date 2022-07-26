const { CostumAPIError } = require("../errors/costum-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.statusCode === 404) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(res.status(500).json({ message: err.message }));
};

module.exports = errorHandlerMiddleware;
