/* eslint-disable valid-jsdoc */
/**
 * @class Util
 */
export default class Util {
  /**
   *
   */
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.token = null;
    this.message = null;
    this.error = null;
  }

  /**
   * @param {number} statusCode - The res status code
   * @param {string} message - The success message
   * @param {string} token - The JWT signed token
   * @param {object} data - The res body object
   */
  setSuccess(statusCode, message, token, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.token = token;
    this.data = data;
    this.type = "success";
  }

  /**
   * @param {number} statusCode - The res status code
   * @param {string} message - The error message
   * @param {string} error - The error message
   */
  setError(statusCode, message, error) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.type = "error";
  }

  /**
   * @param {object} res - The res body object
   * @returns {object} Success or Error message
   */
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
