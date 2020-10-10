import jwt from "jsonwebtoken";

require("dotenv").config();

export default class Auth {
  static async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      return decoded;
    } catch (err) {
      return err;
    }
  }
}
