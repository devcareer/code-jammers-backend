export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.token = null;
    this.message = null;
    this.errors = null;
  }

  setSuccess(statusCode, message, token) {
    this.statusCode = statusCode;
    this.message = message;
    this.token = token;
    this.type = "success";
  }

  setError(statusCode, message, errors) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      token: this.token,
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
