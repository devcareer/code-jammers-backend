import database from "../../models";

export default class Subscriber {
  static async emailExist(email) {
    try {
      return await database.Subscribers.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }

  static async subscribe(subscriberDetails) {
    try {
      const subscribe = await database.Subscribers.create(subscriberDetails);
      const subscribeUser = await database.Subscribers.findOne({
        where: { email: subscribe.email }
      });
      if (subscribeUser) {
        const subscribedUser = {
          subscribed: true,
        };
        await database.Subscribers.update(subscribedUser, {
          where: { email: subscribeUser.email }
        });
      }
      return subscribeUser;
    } catch (error) {
      throw error;
    }
  }

  static async receivedMail(email, newsletter) {
    try {
      const subscriber = await database.Subscribers.findOne({
        where: { email }
      });
      if (subscriber) {
        return await database.Subscribers.update(newsletter, {
          where: { email: subscriber.email }
        });
      }
    } catch (error) {
      throw error;
    }
  }

  static async subscribers() {
    try {
      const allSubscribers = await database.Subscribers.findAll();
      return allSubscribers;
    } catch (error) {
      throw error;
    }
  }

  static async unsubscribe(emailExist) {
    try {
      if (emailExist) {
        return await database.Subscribers.destroy({
          emailExist,
          where: { email: emailExist.email }
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
