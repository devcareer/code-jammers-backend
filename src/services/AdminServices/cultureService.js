// get a culture by id and/or country
// update a culture
// delete a culture or from a culture
// get all cultures

import db from "../../models/index";

/**
 * @class CultureServices
 * @description allows admin user create and check culture details
 * @exports CultureServices
 */
export default class CultureServices {
  /**
   * @param {uuid} id The country Id
   * @returns {object} An instance of the Countries model class
   */
  static async getCulturesByCountry(id) {
    try {
      return await db.Cultures.findAll({ where: { countryId: id } });
    } catch (error) {
      throw error;
    }
  }
}
