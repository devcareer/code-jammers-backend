import db from "../models/index";

import signToken from "../utilities/signToken";
import utils from "../utilities";
import hashPassword from "../utilities/hashPassword";

const { sendEmail } = utils;
require("dotenv").config();
const jwt = require("jsonwebtoken");

let hostURL;

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
      if (process.env.NODE_ENV === "production") {
        hostURL = "https://know-africa.herokuapp.com";
      } else { hostURL = `http://localhost:${process.env.PORT || 3000}`; }

      const link = `${hostURL}/api/v1/users/reset/${user.id}/${signed}`;

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          res.send({ status: 200, error: "user does not exist" });
=======
          return res.send({ status: 200, error: "user does not exist" });
>>>>>>> 23c2935... add test files for reset password
        }
        try {
          jwt.verify(token, user.password);
          const hashedPass = hashPassword(newPassword);
          user.password = hashedPass;

          try {
            db.Users.update({
              password: hashedPass,
            }, {
              where: {
                id: user.id
              },
              returning: true,
              plain: true
            });
          } catch (error) {
            throw error;
          }

          return res.status(200).json({
            status: 200,
            success: "password has been reset"
          });
        } catch (error) {
          console.log(error);
>>>>>>> cd38d9f... Add changes to test files
          res.send({ status: 200, error: "link has already been used please request for another one" });
        }
      });
  },
};
