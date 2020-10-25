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

  static async receivedMail(email, title) {
    try {
      const subscriber = await database.Subscribers.findOne({
        where: { email }
      });
      subscriber.newsletter.push(title);
      await database.Subscribers.update({
        newsletter: subscriber.newsletter
      }, {
        where: { email },
      });
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

  // static async deleteUnverifiedSubscriber(email) {
  //   try {
  //     const unverifiedSubscriber = await database.Subscribers.findOne({
  //       where: { email }
  //     });
  //     if (unverifiedSubscriber) {
  //       await database.Subscribers.destroy({
  //         where: {
  //           verified: false
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
