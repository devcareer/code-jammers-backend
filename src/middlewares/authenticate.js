import jwt from "jsonwebtoken";
import db from "../models";

const { Users } = db;
require("dotenv").config();

export default class Authentication {
  static async verifyToken(req, res, next) {
    try {
      const { authorization } = req.headers;
      let decoded;
      if (authorization) {
        const token = authorization.split(" ")[1];
        decoded = jwt.verify(token, process.env.JWT_KEY);
        req.decoded = decoded;
        return next();
      }
      return res.status(401).json({ status: 401, error: "Please login." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }
  }

  static async verifyAdmin(req, res, next) {
    try {
      const { id } = req.decoded.user;
      console.log(req.decoded);
      const user = Authentication.findAdminById(id);
      if (user) {
        console.log(user);
        return next();
      }
      return res.status(403).json({ status: 403, error: "Access denied." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }
  }

  static findAdminById(id) {
    return db.Users.findOne({ where: { id, role: "Admin", } });
  }
}
