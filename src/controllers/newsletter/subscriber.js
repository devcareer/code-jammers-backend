import { subscriberValidation } from "../../validation/userValidation";
import Subscriber from "../../services/newsletterServices/subsciber";
import Util from "../../utilities/util";
import sendGrid from "../../utilities/sendgrid";

const util = new Util();

/**
 * @class subscriber
 * @description create subscriber, verify subscriber, get all subscribers, unsubscribe a subscriber
 * @exports subscriber
 */
export default class subscriber {
  /**
   * @param {object} req - The subscriber request object
   * @param {object} res - The subscriber response object
   * @returns {object} Success message
   */
  static async createSubscriber(req, res) {
    try {
      const { error } = subscriberValidation(req.body);
      if (error) {
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, firstName } = req.body;
      const Email = email.toLowerCase();
      const emailExist = await Subscriber.emailExist(Email);
      if (emailExist) return res.status(409).json({ status: 409, error: "Sorry, You're already subscribed to this newsletter." });
      const subscriberDetails = { email: Email, firstName };
      const subscribedUser = await Subscriber.subscribe(subscriberDetails);
      await sendGrid.sendVerificationEmail(Email, firstName, "subscriber");
      return res.status(201).json({ status: 201, message: "Please verify that you own this email", data: subscribedUser });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  /**
   * @param {object} req - The subscriber request object
   * @param {object} res - The subscriber response object
   * @returns {object} - Success message
   */
  static async verifySubscriber(req, res) {
    try {
      const { email } = req.params;
      const updatedSubscriber = await Subscriber.updateSubscriberVerification(email);
      res.status(200).json({ status: 200, message: "Yay!!! You just subscribed successfully", data: { email: updatedSubscriber[1].email, verified: updatedSubscriber[1].verified } });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  /**
   * @param {object} req - The subscriber request object
   * @param {object} res - The subscriber response object
   * @returns {object} Success message
   */
  static async allSubscribers(req, res) {
    try {
      const getSubscribers = await Subscriber.subscribers();
      if (getSubscribers.length > 0) {
        return res.status(200).json({ status: 200, message: "Subscribers Retrieved", data: getSubscribers });
      }
      return res.status(404).json({ status: 404, message: "No Subscriber found" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  /**
   * @param {object} req - The subscriber request object
   * @param {object} res - The subscriber response object
   * @returns {object} Success message
   */
  static async unsubscribe(req, res) {
    try {
      const { email } = req.body;
      if (!email) return res.status(400).json({ status: 400, error: "Please enter your email address." });
      const Email = email.toLowerCase();
      const emailExist = await Subscriber.emailExist(Email);
      if (!emailExist) return res.status(404).json({ status: 404, error: "Subscriber not found" });
      const unsubsrcibedUser = await Subscriber.unsubscribe(emailExist);
      if (unsubsrcibedUser) return res.status(200).json({ status: 200, message: "You've unsubscribed from this newsletter", data: email });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
