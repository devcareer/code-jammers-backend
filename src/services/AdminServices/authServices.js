import jwt from "jsonwebtoken";
import database from "../../models";

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

  static async checkId(userId) {
    try {
      return await database.Users.findOne({ where: { id: userId, role: "Admin" } });
    } catch (err) {
      throw err;
    }
  }
}
