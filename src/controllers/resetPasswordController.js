import db from "../models/index";
import signToken from "../utilities/signToken";
import hashPassword from "../utilities/hashPassword";
import sendGrid from "../utilities/sendgrid";

require("dotenv").config();
const jwt = require("jsonwebtoken");

let hostURL;

/**
 * @class
 * @description recover and reset
 * @exports
 */
export default class {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async recover(req, res) {
    try {
      const user = await db.Users.findOne({ where: { email: req.body.email }, });
      if (!user) {
        return res.status(404).json({ status: 404, error: `The email address ${req.body.email} is not associated with any account.`, });
      }
      if (!user.verified) {
        return res.status(403).json({ status: 403, error: "The acount is not verified. Please check your email inbox for verification email.", });
      }
      if (!user.active) {
        return res.status(403).json({ status: 403, error: "Sorry User has been De-activated. Please contact an Admin.", });
      }
      const signed = signToken(user.toJSON(), user.password);
      await sendGrid.sendResetPasswordEmail(user.email, user.id, signed, res);
      return res.status(200).json({ status: 200, message: "A reset email has been sent" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error", });
    }
  }

  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset response object
   * @returns {object} Success message
   */
  static async reset(req, res) {
    const { id, token } = req.params;
    const { newPassword } = req.body;
    db.Users.findOne({
      where: { id },
    })
      .then(user => {
        if (!user) {
          return res.send({ status: 404, error: "user does not exist" });
        }
        if (!user.active) {
          return res.status(400).json({ status: 403, message: "Sorry User has been De-activated, Please contact an admin" });
        } try {
          jwt.verify(token, user.password);
        } catch (error) {
          return res.send({ status: 410, error: "link has expired or has been used. please request for a new link." });
        }
        const hashedPass = hashPassword(newPassword);
        try {
          db.Users.update({ password: hashedPass, }, {
            where: { id: user.id }, returning: true, plain: true
          });
          return res.status(200).json({ status: 200, success: "password has been reset" });
        } catch (error) {
          return res.status(500).json({ status: 500, error: "Server error", });
        }
      });
  }
}
