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

  /**
<<<<<<< HEAD
   * @param {uuid} countryId - The country name
   * @returns {object} An instance of the Countries model class
   */
  static async checkCountryById(countryId) {
    try {
      return await database.Countries.findOne({ where: { id: countryId } });
    } catch (err) {
      throw err;
    }
  }

  /**
=======
>>>>>>> 498d4cd... Rebase develop
   * @param {string} nameOfCountry - Native country of a  food
   * @returns {object} - An instance of the Countries' model class
   */
  static async countryName(nameOfCountry) {
    const renameCountry = nameOfCountry.split(" ");
    let newCountryName = [];
    for (let x = 0; x < renameCountry.length; x++) {
      newCountryName.push(renameCountry[x].charAt(0).toUpperCase() + renameCountry[x].slice(1));
    }
    return newCountryName.join(" ");
  }
}
