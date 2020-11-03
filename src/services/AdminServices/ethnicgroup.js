import db from "../../models/index";

/**
 * @class EthnicGroups
 * @description allows admin user create and check EthnicGroup details
 * @exports EthnicGroups
 */
export default class EthnicGroups {
  /**
   * @param {string} newEthnicGroup - The EthnicGroup details
   * @returns {object} An instance of the EthnicGroup model class
   */
  static async addEthnicGroup(newEthnicGroup) {
    try {
      return await db.EthnicGroups.create(newEthnicGroup);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - EthnicGroup id
   * @param {string} ethnicGroup - EthnicGroup object
   * @returns {object} An updated instance of the EthnicGroup model class
   */
  static async updateById(id, ethnicGroup) {
    try {
      return await db.EthnicGroups.update(ethnicGroup, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} name - The name
   * @returns {object} An instance of the EthnicGroups model class
   */
  static async checkEthnicGroup(name) {
    try {
      return await db.EthnicGroups.findOne({ where: { name } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the EthnicGroups model class
   */
  static async getAll() {
    try {
      return await db.EthnicGroups.findAll();
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} id - TouristCenter id
   * @returns {object} An instance of the TouristCenter model class
   */
  static async findById(id) {
    try {
      return await db.EthnicGroups.findOne({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - EthnicGroups object
   * @returns {object} An instance of the EthnicGroups model class
   */
  static async deleteById(id) {
    try {
      await db.EthnicGroups.destroy({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
