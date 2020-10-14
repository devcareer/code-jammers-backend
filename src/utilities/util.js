export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.token = null;
    this.message = null;
    this.error = null;
  }

  setSuccess(statusCode, message, token, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.token = token;
    this.data = data;
    this.type = "success";
  }

  profileSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
  }

  setError(statusCode, message, error) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.statusCode,
      message: this.message,
      data: this.data,
      token: this.token,
    };
    if (this.type === "success") {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.statusCode,
      error: this.error
    });
  }
}
