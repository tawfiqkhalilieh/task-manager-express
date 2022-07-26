class CustomAPIError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const CraeteCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { CraeteCustomError, CustomAPIError };
