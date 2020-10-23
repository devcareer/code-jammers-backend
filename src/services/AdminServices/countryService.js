import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class Admin {
  /**
   * @param {string} newCountry - The country details
   * @returns {object} An instance of the Countries model class
   */
  static async addCountry(newCountry) {
    try {
      return await database.Countries.create(newCountry);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} countryName - The country name
   * @returns {object} An instance of the Countries model class
   */
  static async checkCountry(countryName) {
    try {
      return await database.Countries.findOne({ where: { nameOfCountry: countryName } });
    } catch (err) {
      throw err;
    }
  }
}
