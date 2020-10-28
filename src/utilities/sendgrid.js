import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let hostURL = "https://know-africa.herokuapp.com";
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  hostURL = `http://localhost:${process.env.PORT || 3000}`;
}
const msg = {
  from: process.env.SENDGRID_EMAIL,
  subject: "Welcome to Know Africa! Confirm Your Email",
  mail_settings: {
    sandbox_mode: {
      enable: false
    }
  }
};

/**
 *
 */
export default class {
  // eslint-disable-next-line valid-jsdoc
  /**
   *
   */
  static sandboxMode() {
    msg.mail_settings.sandbox_mode.enable = true;
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * @param {string} email - The user email
   */
  static async sendVerificationEmail(email) {
    const link = `${hostURL}/api/v1/users/signup/verify/${email}`;
    msg.to = email;
    msg.html = `<strong>Please click the following link to confirm your email address: </strong> <a href="${link}" style ="text-decoration: none; padding: 5px 7px; color: black; background-color: rgb(103, 238, 114); border-radius: 3px; font-weight: bold;">VERIFY ME</a>`;
    try {
      await sgMail.send(msg);
    } catch (err) { console.error(err.message); }
  }
}
