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
      const stringState = String(stateName);
      const Name = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      return await database.States.findOne({ where: { name: Name } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} countryid - The country id details
   * @returns {object} An instance of the States country class
   */
  static async checkCountryId(countryid) {
    try {
      return await database.Countries.findOne({ where: { id: countryid } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the States model class
   */
  static async getAllStates() {
    try {
      return await database.States.findAll({ attributes: ["id", "name", "countryId", "capital", "gallery"] });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The state id
   * @returns {object} An instance of the States model class
   */
  static async getState(id) {
    try {
      return await database.States.findOne({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The state name
   * @returns {object} An instance of the States model class
   */
  static async deleteState(id) {
    try {
      const state = await database.States.findOne({ where: { id } });
      return await state.destroy({ cascade: true });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The old state name
   * @param {string} state - The new state details
   * @returns {object} An instance of the States model class
   */
  static async updateState(id, state) {
    try {
      return await database.States.update(state, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
