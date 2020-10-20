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
      return await database.Subscribers.create(subscriberDetails);
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

  // User.find({
  //   where: {
  //     fb_id: req.user.fb_id
  //   }
  // })
  // .then((user) => {
  //   user.library.push(req.body._isbn)
  //   user.update({
  //     library: user.library
  //   },{
  //     where: {
  //       fb_id: req.user.fb_id
  //     }
  //   })
  //   .then(user => res.json(user))
  // })

  static async updateNewsletter(email, title) {
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

  static async receivedMail(email, title) {
    try {
      const subscriber = await database.Subscribers.findOne({
        where: { email }
      });
      if (subscriber) {
        return await database.Subscribers.update(
          {
            newsletter: title
          }, {
            where: { email: subscriber.email }
          }
        );
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
