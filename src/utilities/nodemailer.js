import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export default class Nodemailer {
  static async sendWelcomeMail(mailOptions) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log("ERROR", err);
      else console.log("Message sent: %s", info.messageId);
    });
  }
}
