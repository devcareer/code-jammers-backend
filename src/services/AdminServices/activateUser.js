import database from "../../models";

/**
 * @class User
 * @description User services
 * @exports User
 */
export default class User {
  /**
   * @param {string} id - The user id
   * @returns {object} - An instance of the Users model class
   */
  static async activateUser(id) {
    try {
      return await database.Users.update({
        active: true
      }, {
        where: {
          id
        },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} id - The user id
   * @returns {object} - An instance of the Users model class
   */
  static async deActivateUser(id) {
    try {
      return await database.Users.update({
        active: false
      }, {
        where: {
          id
        },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }
}
