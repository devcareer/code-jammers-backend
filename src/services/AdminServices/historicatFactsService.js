import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class HF_Services {
  /**
   * @param {string} newHistoricalFacts - The HistoricalFacts details
   * @returns {object} An instance of the HistoricalFacts model class
   */
  static async addHistoricalFact(newHistoricalFact) {
    try {
      return await database.HistoricalFacts.create(newHistoricalFact);
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
      return await database.HistoricalFacts.findOne({
        where: {
          location,
        }
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
        }
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
      return await database.HistoricalFacts.findAll();
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
      return await database.HistoricalFacts.findOne({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} oldHistoricalFacts - former HistoricalFacts object
   * @param {string} newHistoricalFacts - new HistoricalFacts object
   * @returns {object} An updated instance of the HistoricalFacts model class
   */
  static async editHistoricalFact(oldHistoricalFact, newHistoricalFact) {
    try {
      if (newHistoricalFact.gallery) {
        oldHistoricalFact.gallery.push(newHistoricalFact.gallery);
        // eslint-disable-next-line no-param-reassign
        newHistoricalFact.gallery = oldHistoricalFact.gallery;
      }
      return await database.HistoricalFacts.update(newHistoricalFacts, {
        where: { id: oldHistoricalFacts.id },
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
      await database.HistoricalFacts.destroy({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
