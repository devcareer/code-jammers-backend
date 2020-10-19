import database from "../../models";

export default class Newsletter {
  static async createNewsletter(newsletterDetails) {
    try {
      const newsletter = await database.Newsletters.create(newsletterDetails);
      if (newsletter) {
        return newsletter;
      }
    } catch (error) {
      throw error;
    }
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
