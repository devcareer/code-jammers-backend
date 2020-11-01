import CountryServices from "../services/AdminServices/cultureService";
import validation from "../validation/culture";

/**
 * @class CultureController
 * @description create, get and edit culture
 * @exports CultureController
 */
export default class CultureController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async createCulture(req, res) {
    try {
      const {
        countryId, name, festivals, dressing, language, gallery, tribe
      } = req.body;
      let cultureName;
      if (name) {
        cultureName = String(name)[0].toUpperCase() + String(name).slice(1).toLowerCase();
      }
      const createCulture = {
        countryId, name: cultureName, festivals, dressing, language, gallery, tribe
      };
      const { error } = validation(createCulture);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await Admin.checkCountry(countryName);
      if (country) return res.status(409).json({ status: 409, message: "This country already exists in the database." });
      const createdCountry = await Admin.addCountry(newCountry);
      return res.status(201).json({ status: 201, message: "A country has been added.", data: createdCountry, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getCultureByCountry(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const cultures = await CountryServices.getCulturesByCountry(id);
      return res.status(200).json({ status: 200, message: cultures });
    } catch (error) {
      throw error;
    }
  }
}
