import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class Admin {
  /**
   * @param {string} newState - The state details
   * @returns {object} An instance of the States model class
   */
  static async addState(newState) {
    try {
      return await database.States.create(newState);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} stateName - The state name
   * @returns {object} An instance of the States model class
   */
  static async checkState(stateName) {
    try {
      return await database.States.findOne({ where: { name: stateName } });
    } catch (err) {
      throw err;
    }
  }
  static async checkCountryId(countryId) {
    try {
      return await database.States.findOne({ where: { countryId: countryId } });
    } catch (err) {
      throw err;
    }
  }
  static async getAllStates () {
    try {
      return await database.States.findAll({ attributes: [ "name", "countryId", "capital", "gallery"] });
    } catch (err) {
      throw err;
    }
  }
}
