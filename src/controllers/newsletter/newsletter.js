import Util from "../../utilities/util";
import { newsletterValidation } from "../../validation/userValidation";
import Newsletter from "../../services/newsletterServices/newsletter";
import Subscriber from "../../services/newsletterServices/subsciber";
import Nodemailer from "../../utilities/nodemailer";

const util = new Util();
export default class Newsletters {
  static async createNewsletter(req, res) {
    try {
      const { error } = newsletterValidation(req.body);
      if (error) {
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { title, message } = req.body;
      const newsletterDetails = { title, message };
      const newsletters = await Newsletter.createNewsletter(newsletterDetails);
      const getSubscribers = await Subscriber.subscribers();
      const newsletter = {
        title: newsletterDetails.title
      };
      if (getSubscribers) {
        getSubscribers.forEach(async element => {
          const mailOptions = {
            from: "Know Africa Newsletter <codejammers1@gmail.com>",
            replyTo: "codejammers1@gmail.com",
            to: element.email,
            subject: title,
            text: message,
          };
          const saveNewsletter = await Subscriber.receivedMail(element.email, newsletter);
          await Nodemailer.sendWelcomeMail(mailOptions);
        });
      }
      if (newsletters) {
        return res.status(201).json({ status: 201, message: "Newsletter created!", data: newsletters });
      }
    } catch (error) {
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
