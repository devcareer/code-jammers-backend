import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let hostURL;
const msg = {
  from: `Know Africa Newsletter <${process.env.SENDGRID_EMAIL}>`,
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

  static async sendVerificationEmail(email, User, fillroute) {
    if (process.env.NODE_ENV === "production") {
      hostURL = "https://know-africa.herokuapp.com";
    } else { hostURL = `http://localhost:${process.env.PORT || 3000}`; }
    const link = `${hostURL}/api/v1/${fillroute}/verify/${email}`;
    msg.to = email;
    msg.subject = "Welcome to Know Africa! Confirm Your Email";
    msg.html = `<div style= "line-height:2.5rem;margin: auto; border: 1rem; text-align: left; width: 50%; padding-top: 80px;">
    <p style ="text-align: center;  border: 1rem solid rgba(75, 203, 250, 0.1); margin: auto; width: 100%">Welcom to Know Africa!</p>
          <p style="margin: 10px">Dear <strong>${User}</strong>,<br> Thank you for joining Know Africa. We look forward to sharing the many beauties of Africa with you! <br> Please click the button below to confirm you own this email address</p>
          <a href="${link}" style ="text-decoration:none; padding:5px 15px;color:white;background-color:rgb(75,203,250);font-weight:bold; border-radius:30px;
      margin: 18px; width:40%;">Verify Me</a>
          <p style="margin: 10px">If this was not initiated by you, please ignore.</p>
          <p style = "font-variant: small-caps; opacity: 0.5; margin: 10px;">Regards, Know Africa Team!</p>
        </div>`;
    try {
      await sgMail.send(msg);
    } catch (err) { console.error(err.message); }
  }
}
