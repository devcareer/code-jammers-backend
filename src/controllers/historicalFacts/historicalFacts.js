import HF_Services from "../../services/AdminServices/historicalFactsService";
import { validation, validateId } from "../../validation/historicalFactsValidation";
// import { validation, validateId } from "../../validation/historicalFactsValidation";

/**
 * @class historicalFact
 * @description create, read, update & delete historicalFact
 * @exports historicalFact
 */
export default class historicalFact {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addHistoricalFact(req, res) {
    try {
      const {
        about, location, gallery
      } = req.body;
      const { countryId } = req.params;
      const { error } = validation({
        countryId, about, location, gallery
      });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await HF_Services.findCountry(countryId);
      if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      const newHistoricalFact = {
        countryId, gallery, location, about
      };
      const newHistoricalFactCreated = await HF_Services.addHistoricalFact(newHistoricalFact);
      return res.status(201).json({ status: 201, message: "HistoricalFacts has been successfully added.", data: newHistoricalFactCreated, });
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
  static async getAllHistoricalFacts(req, res) {
    try {
      const historicalFacts = await HF_Services.listHistoricalFacts();
      return res.status(200).json({ status: 200, message: "Successfully retrieved all Historical Facts", data: historicalFacts, });
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
      const historicalFact = await HF_Services.findHistoricalFactById(id);
      if (!historicalFact) return res.status(404).json({ status: 404, error: "Historical Fact not found" });
      return res.status(200).json({ status: 200, message: "Successfully retrieved Historical Fact.", data: historicalFact, });
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
      const oldHistoricalFact = await HF_Services.findHistoricalFactById(id);
      if (!oldHistoricalFact) return res.status(404).json({ status: 404, error: "Historical Fact not found" });
      if (countryId) {
        const country = await HF_Services.findCountry(countryId);
        if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      }
      const newHistoricalFact = await HF_Services.editHistoricalFact(id, req.body);
      return res.status(200).json({ status: 200, message: "Successfully updated Historical Fact.", data: newHistoricalFact[1], });
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
      const historical_Fact = await HF_Services.findHistoricalFactById(id);
      if (!historical_Fact) return res.status(404).json({ status: 404, error: "Historical Fact not found" });
      await HF_Services.delHistoricalFact(id);
      return res.status(200).json({ status: 200, message: "Successfully deleted Historical Fact." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
