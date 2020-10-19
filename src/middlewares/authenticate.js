import jwt from "jsonwebtoken";
import sequelize from "sequelize";
import db from "../models";

const { Op } = sequelize;

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
      const user = await Authentication.findAdminById(id);
      if (user) {
        return next();
      }
      return res.status(403).json({ status: 403, error: "Access denied." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }
  }

  static async findAdminById(id) {
    try {
      return await db.Users.findOne({
        where: {
          id,
          role: {
            [Op.or]: ["Admin", "Super Admin"]
          }
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
