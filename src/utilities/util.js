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
    this.type = statusCode;
  }

  setError(statusCode, message, error) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.type = "success";
  }

  send(res) {
    const result = {
      status: this.statusCode,
      message: this.message,
      token: this.token,
    };

    if (this.type === this.statusCode) {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}
