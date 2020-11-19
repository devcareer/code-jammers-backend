import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class HF_Services {
  /**
   * @param {string} newHistoricalFact - The HistoricalFacts details
   * @returns {object} An instance of the HistoricalFacts model class
   */
  static async addHistoricalFact(newHistoricalFact) {
    try {
      return await database.Historicalfacts.create(newHistoricalFact);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} location - Historicalfacts location
   * @returns {object} An instance of the Historicalfacts model class
   */
  static async findHistoricalFactByLocation(location) {
    try {
      return await database.Historicalfacts.findAll({
        where: {
          location,
        },
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - Historicalfacts id
   * @returns {object} An instance of the Historicalfacts model class
   */
  static async findCountry(id) {
    try {
      return await database.Countries.findOne({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} All instances of the HistoricalFacts model class
   */
  static async listHistoricalFacts() {
    try {
      return await database.Historicalfacts.findAll({
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - HistoricalFacts id
   * @returns {object} An instance of the HistoricalFacts model class
   */
  static async findHistoricalFactById(id) {
    try {
      return await database.Historicalfacts.findOne({
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
   * @param {string} id -  HistoricalFacts id
   * @param {string} newHistoricalFact - HistoricalFacts object
   * @returns {object} An updated instance of the HistoricalFacts model class
   */
  static async editHistoricalFact(id, newHistoricalFact) {
    try {
      return await database.Historicalfacts.update(newHistoricalFact, {
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
   * @param {string} id - HistoricalFacts object
   */
  static async delHistoricalFact(id) {
    try {
      await database.Historicalfacts.destroy({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
