import database from "../../models";

/**
 * @class Subscriber
 * @description Subscriber services
 * @exports Subscriber
 */
export default class Subscriber {
  /**
   * @param {string} email - The subscriber's email
   * @returns {object} - An instance of the Subscribers model class
   */
  static async emailExist(email) {
    try {
      return await database.Subscribers.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} subscriberDetails - Details used to create a new subscriber
   * @returns {object} - An instance of the Subscribers model class
   */
  static async subscribe(subscriberDetails) {
    try {
      const createSubscriber = await database.Subscribers.create(subscriberDetails);
      const subscriber = await database.Subscribers.findOne(
        {
          where: {
            id: createSubscriber.id
          }
        }
      );
      if (subscriber) {
        const subscriberId = {
          subscriberId: subscriber.id
        };
        await database.Newsletter_Subscribers.create(subscriberId);
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} email - The registered email of subscriber
   * @returns {object} - An instance of the Subscribers model class
   */
  static async updateSubscriberVerification(email) {
    try {
      return await database.Subscribers.update({
        verified: true
      }, {
        where: {
          email
        },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} email - The registered email of subscriber
   * @param {string} title - Title of newsletter received by subscriber
   * @returns {object} - An instance of the Subscribers model class
   */
  static async receivedMail(email, title) {
    try {
      const subscriber = await database.Subscribers.findOne({
        where: { email }
      });
      if (subscriber) {
        subscriber.newsletter.push(title);
        await database.Subscribers.update({
          newsletter: subscriber.newsletter
        }, {
          where: { email },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * @returns {object} - An instance of the Subscribers model class
   */
  static async subscribers() {
    try {
      const allSubscribers = await database.Subscribers.findAll();
      return allSubscribers;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} emailExist - The registered email of subscriber
   * @returns {object} - An instance of the Subscribers model class
   */
  static async unsubscribe(emailExist) {
    try {
      if (emailExist) {
        const deleteSubscriber = await database.Subscribers.destroy({
          emailExist,
          where: { email: emailExist.email }
        });
        await database.Newsletter_Subscribers.destroy({
          emailExist,
          where: { subscriberId: emailExist.id }
        });
        return deleteSubscriber;
      }
    } catch (error) {
      throw error;
    }
  }
}
