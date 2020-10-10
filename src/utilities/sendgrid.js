import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

export default async email => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const link = `http://localhost:3000/api/v1/users/signup/verify/${email}`;
  const msg = {
    to: email, from: process.env.SENDGRID_EMAIL, subject: "Welcome to Know Africa! Confirm Your Email", html: `<strong>Please click the following link to confirm your email address: </strong> <a href="${link}" style ="text-decoration: none; padding: 5px 7px; color: black; background-color: rgb(103, 238, 114); border-radius: 3px; font-weight: bold;">VERIFY ME</a>`
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    console.error(err.message);
    return false;
  }
  return true;
};
