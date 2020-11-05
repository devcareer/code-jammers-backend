import jwt from "jsonwebtoken";
import sequelize from "sequelize";
import db from "../models";

const { Op } = sequelize;

require("dotenv").config();

/**
 * @class Authentication
 * @description authenticate token and roles
 * @exports Authentication
 */
export default class Authentication {
  /**
   * @param {object} req - The res body object
   * @param {object} res - The res body object
   * @param {object} next -  The function to call next
   * @returns {Function} errorResponse | next
   */
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

  /**
   * @param {object} req - The res body object
   * @param {object} res - The res body object
   * @param {object} next -  The function to call next
   * @returns {Function} errorResponse | next
   */
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

  /**
   * @param {string} id - The user ID
   * @returns {object} - An instance of the Users model class
   */
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

  /**
   * @param {object} req - The res body object
   * @param {object} res - The res body object
   * @param {object} next -  The function to call next
   * @returns {Function} errorResponse | next
   */
  static async verifyUser(req, res, next) {
    try {
      const { id } = req.decoded.user;
      const user = await Authentication.findUserById(id);
      if (user) {
        return next();
      }
      return res.status(403).json({ status: 403, error: "User is deactivated." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error." });
    }
  }

  /**
   * @param {string} id - The user ID
   * @returns {object} - An instance of the Users model class
   */
  static async findUserById(id) {
    try {
      return await db.Users.findOne({
        where: {
          id,
          active: true
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
