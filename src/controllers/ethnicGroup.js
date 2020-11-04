import EthnicGroups from "../services/AdminServices/ethnicgroup";
import { validation, validateId, updateValidation } from "../validation/ethnicgroup";
import Admin from "../services/AdminServices/countryService";

/**
 * @class EthnicGroup
 * @description create, get and edit ethnic group
 * @exports EthnicGroup
 */
export default class EthnicGroup {
  /**
   * Add a new ethnic group
   *
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async createEthnicGroup(req, res) {
    try {
      const { countryId } = req.params;
      const {
        name, festivals, dressing, language, gallery, culturalPractices
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
      if (!checkCountryId) return res.status(404).json({ status: 404, error: "This country does not exist in the database." });
      const ethnicgroup = await EthnicGroups.checkEthnicGroup(name);
      if (ethnicgroup) return res.status(409).json({ status: 409, error: "This ethnic group already exists in the database." });
      const created = await EthnicGroups.addEthnicGroup(newEthnicGroup);
      return res.status(201).json({ status: 201, message: "A new ethnic group has been added.", data: created, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   *  Get all Ethnic Groups
   *
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getAll(req, res) {
    try {
      const ethnicgroups = await EthnicGroups.getAll();
      if (ethnicgroups.length === 0) return res.status(404).json({ status: 404, error: "Tell us about your ethnic group!" });
      return res.status(200).json({ status: 200, data: ethnicgroups });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   *  Delete an ethnic group by id
   *
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const ethnicgroup = await EthnicGroups.findById(id);
      if (!ethnicgroup) return res.status(404).json({ status: 404, error: "Ethnic Group not found" });
      return res.status(200).json({ status: 200, data: ethnicgroup });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   *  Update an ethnic group by id
   *
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateById(req, res) {
    try {
      const { id } = req.params;
      const {
        countryId,
        name,
        festivals,
        dressing,
        language,
        gallery,
        culturalPractices,
      } = req.body;
      const { error } = validateId({ id });
      const { updateError } = updateValidation(req.body);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      if (updateError) return res.status(400).json({ status: 400, error: error.message });
      const ethnicgroup = await EthnicGroups.findById(id);
      if (!ethnicgroup) return res.status(404).json({ status: 404, error: "Ethnic Group not found" });
      if (countryId) {
        const countryExists = await Admin.checkCountryById(countryId);
        if (!countryExists) return res.status(404).json({ status: 404, error: "This country does not exist." });
      }
      let newname;
      if (name) {
        newname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        req.body.name = newname;
      }
      const updatedEthnicGroup = await EthnicGroups.updateById(id, req.body);
      return res.status(200).json({ status: 200, message: "Successfully updated.", updated: updatedEthnicGroup[1], });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   *  Delete an ethnic group by id
   *
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
