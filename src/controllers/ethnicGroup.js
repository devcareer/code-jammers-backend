import EthnicGroups from "../services/AdminServices/ethnicgroup";
import { validation, validateId } from "../validation/ethnicgroup";
import Admin from "../services/AdminServices/countryService";
// const ethnicGroups = [
//   "id",
//   "countryId",
//   "name",
//   "festivals",
//   "dressing",
//   "language",
//   "gallery",
//   "culturalPractices",
// ];

/**
 * @class EthnicGroup
 * @description create, get and edit ethnic group
 * @exports EthnicGroup
 */
export default class EthnicGroup {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async createEthnicGroup(req, res) {
    try {
      const {
        countryId, name, festivals, dressing, language, gallery, culturalPractices
      } = req.body;
      let ethnicGroupName;
      if (name) {
        ethnicGroupName = String(name)[0].toUpperCase() + String(name).slice(1).toLowerCase();
      }
      const newEthnicGroup = {
        countryId, name: ethnicGroupName, festivals, dressing, language, gallery, culturalPractices
      };
      const { error } = validation(newEthnicGroup);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const checkCountryId = await Admin.checkCountryById(countryId);
      if (!checkCountryId) return res.status(404).json({ status: 404, message: "This country does not exist in the database." });
      const ethnicgroup = await EthnicGroups.checkEthnicGroup(name);
      if (ethnicgroup) return res.status(409).json({ status: 409, message: "This ethnic group already exists in the database." });
      const created = await EthnicGroups.addEthnicGroup(newEthnicGroup);
      return res.status(201).json({ status: 201, message: "A new ethnic group has been added.", data: created, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getByCountryId(req, res) {
    try {
      const { countryId } = req.params;
      const ethnicgroups = await EthnicGroups.getByCountryId(countryId);
      if (!ethnicgroups) return res.status(404).json({ status: 404, message: "This country does not exist in the database." });
      return res.status(200).json({ status: 200, ethnicgroups });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getAll(req, res) {
    try {
      const ethnicgroups = await EthnicGroups.getAll();
      if (ethnicgroups.length === 0) return res.status(200).json({ status: 200, message: "Tell us about your ethnic group!" });
      return res.status(200).json({ status: 200, message: ethnicgroups });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const ethnicgroup = await EthnicGroups.findById(id);
      if (!ethnicgroup) return res.status(404).json({ status: 404, error: "Ethnic Group not found" });
      await EthnicGroups.deleteById(id);
      return res.status(200).json({ status: 200, message: "Successfully deleted!" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
