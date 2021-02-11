class ErrorHandler extends Error {
  constructor(statusCode, internalCode, message, data) {
    super();
    this.statusCode = statusCode;
    this.internalCode = internalCode;
    this.message = message;
    this.data = data || '';
  }
}

const handleError = (err, res) => {
  const { statusCode, internalCode, message, data } = err;
  res.status(statusCode)
    .json({
      status: false,
      internalCode,
      message,
      data
    });
};

module.exports = {
  ErrorHandler,
  handleError,
};
