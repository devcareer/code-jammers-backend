export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.errors = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  validationError(statusCode, message, errors) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
      errors: this.errors
    };

    if (this.type === "success") {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
      errors: this.errors
    });
  }
}
