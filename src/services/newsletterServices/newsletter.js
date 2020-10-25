import database from "../../models";

export default class Newsletter {
  static async createNewsletter(newsletterDetails) {
    try {
      return await database.Newsletters.create(newsletterDetails);
    } catch (error) {
      throw error;
    }
  }

  static async updateNewsletterId(subscriberId, newsletter_id) {
    const newSub = await database.Newsletter_Subscribers.findOne({
      where: { subscriberId }
    });
    newSub.newsletterId.push(newsletter_id);
    await database.Newsletter_Subscribers.update({
      newsletterId: newSub.newsletterId
    }, {
      where: { subscriberId }
    });
  }

  static async getNewsletter(title) {
    try {
      // return await database.Newsletters.findAll();

      return await database.Newsletters.findOne({
        where: { title },
      });
    } catch (error) {
      throw error;
    }
  }
}
