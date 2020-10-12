import db from "../models/index";

import signToken from "../utilities/signToken";
import utils from "../utilities";
import hashPassword from "../utilities/hashPassword";

const { sendEmail } = utils;
require("dotenv").config();
const jwt = require("jsonwebtoken");

export default {
  recover: async (req, res) => {
    try {
      const user = await db.Users.findOne({
        where: { email: req.body.email },
        attributes: ["id", "username", "email", "password"],
      });
      if (!user) {
        return res.status(404).json({
          status: 404,
          error: `The email address ${req.body.email} is not associated with any account.`,
        });
      }

      const signed = signToken(user.toJSON(), user.password);

      const link = `http://localhost:3000/reset-password/${user.id}/${signed}`;

      return sendEmail(link, user, res);
    } catch (error) {
      console.log(error);
    }
  },

  reset: (req, res) => {
    const { id, token } = req.params;
    const { newPassword } = req.body;
    db.Users.findOne({
      where: { id },
      attributes: ["id", "username", "email", "password"],
    })
      .then(user => {
        if (!user) {
          return res.send({ status: 200, error: "user does not exist" });
        }
        try {
          jwt.verify(token, user.password);
          const hashedPass = hashPassword(newPassword);
          user.password = hashedPass;
          user.save();
          return res.status(200).json({
            status: 200,
            success: "password has been reset"
          });
        } catch (error) {
          console.log(error);
          res.send({ status: 200, error: "link has already been used please request for another one" });
        }
      });
  },
};
