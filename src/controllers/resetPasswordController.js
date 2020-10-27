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
      const user = await db.Users.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        return res.status(404).json({
          status: 404,
          error: `The email address ${req.body.email} is not associated with any account or is not verified.`,
        });
      }
      if (!user.verified) {
        return res.status(404).json({
          status: 404,
          error: "The acount is not verified. Please check your email inbox for verification email.",
        });
      }

      const signed = signToken(user.toJSON(), user.password);
      if (process.env.NODE_ENV === "production") {
        hostURL = "https://know-africa.herokuapp.com";
      } else { hostURL = `http://localhost:${process.env.PORT || 3000}`; }

      const link = `${hostURL}/api/v1/users/reset/${user.id}/${signed}`;
      return await sendGrid.sendResetPasswordEmail(user.email, user.id, signed, res);
    } catch (error) {
      console.log(error);
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
          return res.send({ status: 200, error: "user does not exist" });
        } try {
          jwt.verify(token, user.password);
          const hashedPass = hashPassword(newPassword);
          try {
            db.Users.update({ password: hashedPass, }, {
              where: { id: user.id },
              returning: true,
              plain: true
            });
          } catch (error) { throw error; }
          return res.status(200).json({ status: 200, success: "password has been reset" });
        } catch (error) {
          res.send({ status: 200, error: "link has already been used please request for another one" });
        }
      });
  }
}