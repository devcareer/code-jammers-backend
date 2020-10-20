import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let hostURL;
const msg = {
  from: process.env.SENDGRID_EMAIL,
  mail_settings: {
    sandbox_mode: {
      enable: false
    }
  }
};

export default class {
  static sandboxMode() {
    msg.mail_settings.sandbox_mode.enable = true;
  }

  static async sendNewsletter(email, title, message, html) {
    msg.to = email;
    msg.subject = title;
    msg.text = message;
    msg.html = html;
    await sgMail.send(msg);
  }

  static async sendVerificationEmail(email, fillroute) {
    if (process.env.NODE_ENV === "production") {
      hostURL = "https://know-africa.herokuapp.com";
    } else { hostURL = `http://localhost:${process.env.PORT || 3000}`; }
    const link = `${hostURL}/api/v1/${fillroute}/verify/${email}`;
    msg.to = email;
    msg.subject = "Welcome to Know Africa! Confirm Your Email";
    msg.html = `<strong>Please click the following link to confirm your email address: </strong> <a href="${link}" style ="text-decoration: none; padding: 5px 7px; color: black; background-color: rgb(103, 238, 114); border-radius: 3px; font-weight: bold;">VERIFY ME</a>`;
    try {
      await sgMail.send(msg);
    } catch (err) { console.error(err.message); }
  }
}
