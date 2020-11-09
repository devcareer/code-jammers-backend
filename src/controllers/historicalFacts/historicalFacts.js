import HS_Services from "../services/AdminServices/historicalFactsService";
import { validation, validateId } from "../validation/historicalFactsValidation";

/**
 * @class musicController
 * @description create, read, update & delete touristcenter
 * @exports musicController
 */
export default class historicalFactsController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addhistoricalFact(req, res) {
    try {
      const {
        about, location, gallery
      } = req.body;
      const { countryId } = req.params;
      const { error } = validation({
        countryId, about, location, gallery
      });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await HS_Services.findCountry(countryId);
      if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      const centerLocation = await HS_Services.findHistoricalFactByLocation(location);
      if (centerLocation) return res.status(409).json({ status: 409, message: "HistoricalFact already exists." });
      const newHistoricalFact = {
        countryId, gallery: [gallery], location, about
      };
      const newHistoricalFactCreated = await HS_Services.addnewHistoricalFact(newHistoricalFact);
      return res.status(201).json({ status: 201, message: "HistoricalFacts has been successfully added.", data: newHistoricalFactCreated, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getAllHistoricalFacts(req, res) {
    try {
      const historicalFacts = await HS_Services.listHistoricalFacts();
      return res.status(200).json({ status: 200, message: "Retrived all HistoricalFacts successfully", data: historicalFacts, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getHistoricalFact(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const historicalFact = await HS_Services.findHistoricalFactById(id);
      if (!historicalFact) return res.status(404).json({ status: 404, error: "HistoricalFact not found" });
      return res.status(200).json({ status: 200, message: "Retrived HistoricalFact successfully.", data: historicalFact, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateHistoricalFact(req, res) {
    try {
      const { id } = req.params;
      const {
        countryId, about, location, gallery
      } = req.body;
      const { error } = validateId({ id, countryId });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const oldHistoricalFact= await HS_Services.findHistoricalFactById(id);
      if (!oldHistoricalFact) return res.status(404).json({ status: 404, error: "HistoricalFact not found" });
      if (countryId) {
        const country = await HS_Services.findCountry(countryId);
        if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      }
      const newHistoricalFact = await HS_Services.editHistoricalFact(oldHistoricalFact, req.body);
      return res.status(200).json({ status: 200, message: "Successfully updated HistoricalFact.", data: newHistoricalFact[1], });
    } catch (e) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteHistoricalFact(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const historicalFact = await HS_Services.findHistoricalFactById(id);
      if (!historicalFact) return res.status(404).json({ status: 404, error: "HistoricalFact not found" });
      await HS_Services.delHistoricalFact(id);
      return res.status(200).json({ status: 200, message: "Successfully deleted HistoricalFact." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
