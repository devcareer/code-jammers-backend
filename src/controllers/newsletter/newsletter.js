import Util from "../../utilities/util";
import { newsletterValidation } from "../../validation/userValidation";
import Newsletter from "../../services/newsletterServices/newsletter";
import Subscriber from "../../services/newsletterServices/subsciber";
import sendGrid from "../../utilities/sendgrid";

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
      // console.log(getSubscribers);
      if (getSubscribers) {
        getSubscribers.forEach(async element => {
          await sendGrid.sendNewsletter(element.email, title, message);
          console.log(element.email);
          await Subscriber.updateNewsletter(element.email, newsletterDetails.title);
        });
      }
      if (newsletters) {
        return res.status(201).json({ status: 201, message: "Newsletter created!", data: newsletters });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
