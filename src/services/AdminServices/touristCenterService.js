import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class db {
  /**
   * @param {string} newTouristCenter - The TouristCenter details
   * @returns {object} An instance of the TouristCenters model class
   */
  static async addTouristCenter(newTouristCenter) {
    try {
      return await database.TouristCenters.create(newTouristCenter);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} name - TouristCenter name
   * @returns {object} An instance of the TouristCenter model class
   */
  static async findTouristCenter(name) {
    try {
      return await database.TouristCenters.findOne({
        where: {
          name,
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - TouristCenter id
   * @returns {object} An instance of the TouristCenter model class
   */
  static async findCountry(id) {
    try {
      return await database.Countries.findOne({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} All instances of the TouristCenter model class
   */
  static async listTouristCenters() {
    try {
      return await database.TouristCenters.findAll({
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - TouristCenter id
   * @returns {object} An instance of the TouristCenter model class
   */
  static async findTouristCenterById(id) {
    try {
      return await database.TouristCenters.findOne({
        where: {
          id,
        },
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - TouristCenter id
   * @param {string} touristCenter - TouristCenter object
   * @returns {object} An updated instance of the TouristCenter model class
   */
  static async editTouristCenter(id, touristCenter) {
    try {
      return await database.TouristCenters.update(touristCenter, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * @param {string} id - TouristCenter object
   */
  static async delTouristCenter(id) {
    try {
      await database.TouristCenters.destroy({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
