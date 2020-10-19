import { subscriberValidation } from "../../validation/userValidation";
import Subscriber from "../../services/newsletterServices/subsciber";
import Util from "../../utilities/util";
import Nodemailer from "../../utilities/nodemailer";

const util = new Util();
export default class subscriber {
  static async subscribe(req, res) {
    try {
      const { error } = subscriberValidation(req.body);
      if (error) {
        console.log(error);
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, firstName } = req.body;
      const Email = email.toLowerCase();
      const emailExist = await Subscriber.emailExist(Email);
      if (emailExist) return res.status(409).json({ status: 409, error: "Sorry, You're already subscribed to this newsletter." });
      const subscriberDetails = { email: Email, firstName };
      await Subscriber.subscribe(subscriberDetails);
      const mailOptions = {
        from: "'Know Africa Newsletter' <codejammers1@gmail.com>",
        to: Email,
        subject: "Welcome To Know Africa",
        text: `Dear ${firstName}, Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!`
      };
      await Nodemailer.sendWelcomeMail(mailOptions);
      const subscribedUser = await Subscriber.emailExist(Email);
      return res.status(201).json({ status: 201, message: "Yay!!! You just subscribed", data: subscribedUser });
    } catch (error) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  static async allSubscribers(req, res) {
    try {
      const getSubscribers = await Subscriber.subscribers();
      if (getSubscribers.length > 0) {
        res.status(200).json({ status: 200, message: "Subscribers Retrieved", data: getSubscribers });
      }
      return res.status(404).json({ status: 404, message: "No Subscriber found" });
    } catch (error) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  static async unsubscribe(req, res) {
    try {
      const { email } = req.body;
      if (!email) return res.status(400).json({ status: 400, error: "Please enter your email address." });
      const Email = email.toLowerCase();
      const emailExist = await Subscriber.emailExist(Email);
      const unsubsrcibedUser = await Subscriber.unsubscribe(emailExist);
      if (unsubsrcibedUser) return res.status(200).json({ status: 200, message: "You've unsubscribed from this newsletter", data: email });
    } catch (error) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
