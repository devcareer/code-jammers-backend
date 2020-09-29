import bcrypt from "bcrypt-nodejs";
import db from "../models/index";

import signToken from "../utilities/signToken";
import sendEmail from "../utilities/sendEmail";
import hashPassword from "../utilities/hashPassword";

require("dotenv").config();
const jwt = require("jsonwebtoken");

export default {
  recover: (req, res) => {
    db.Users.findOne({
      where: { email: req.body.email },
      attributes: ["id", "username", "email", "password"],
    })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            status: 404,
            error: `The email address ${req.body.email}is not associated with any account. `,
          });
        }

        const signed = signToken(user.toJSON(), user.password);

        const link = `http://localhost:3000/reset-password/${user.id}/${signed}`;

        sendEmail(link, user, res);
        return null;
      });
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
          res.send({ error: "user does not exist" });
        }
        try {
          jwt.verify(token, user.password);
          const hashedPass = hashPassword(newPassword);
          user.password = hashedPass;
          user.save();
          res.send({ success: "password has been reset" });
        } catch (error) {
          console.log(error);
          res.send({ error: "link has already been used please request for another one" });
        }
      });
  },
};
