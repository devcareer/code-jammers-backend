import Auth from "../services/AdminServices/authServices";

import database from "../models";

export default class Authentication {
  static async checkId(userId) {
    try {
      return database.Users.findOne({ where: { id: userId, role: "Admin" } });
    } catch (err) {
      throw err;
    }
  }

  static async verifyAdmin(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    let decoded;
    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1];
      decoded = await Auth.verifyToken(token);
    } else {
      return res.status(401).json({ status: 401, error: "Please login." });
    }

    const { id } = decoded.user;
    const user = await Authentication.checkId(id);
    if (user) {
      return next();
    }
    return res.status(403).json({ status: 403, error: "Access denied." });
  }
}
