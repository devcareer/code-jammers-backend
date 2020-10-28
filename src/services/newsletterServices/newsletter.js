import database from "../../models";

/**
 * @class Newsletter
 * @description Newsletter services
 * @exports Newsletter
 */
export default class Newsletter {
  /**
   * @param {string} newsletterDetails - Details used to create a newsletter
   * @returns {object} - An instance of the Newsletters model class
   */
  static async createNewsletter(newsletterDetails) {
    try {
      return await database.Newsletters.create(newsletterDetails);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} subscriberId - ID of a registered subscriber
   * @param {string} newsletter_id - ID on the newsletter
   * @returns {object} - An instance of the Newsletters and Newsletter_Subscribers model classes
   */
  static async updateNewsletterId(subscriberId, newsletter_id) {
    const newSub = await database.Newsletter_Subscribers.findOne({
      where: { subscriberId }
    });
    if (newSub) {
      // const newsletterIDs = newSub.newsletterId;
      const NewsletterIDs = newSub.newsletterId.push(newsletter_id);
      // newsletterIDs.push(newsletter_id);
      await database.Newsletter_Subscribers.update({
        newsletterId: NewsletterIDs
      }, {
        where: { subscriberId }
      });
    }
  }

  /**
   * @param {string} title - Title of newsletter
   * @returns {object} - An instance of the Newsletters model class
   */
  static async getNewsletter(title) {
    try {
      return await database.Newsletters.findOne({
        where: { title },
      });
    } catch (error) {
      throw error;
    }
  }
}
