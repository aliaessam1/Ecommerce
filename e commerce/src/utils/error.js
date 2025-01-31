export class appError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const catchAsyncError = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
  };
};
