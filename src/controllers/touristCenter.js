import db from "../services/AdminServices/touristCenterService";
import { validation, validateId } from "../validation/touristCenterValidation";

/**
 * @class touristCenterController
 * @description create, read, update & delete touristcenter
 * @exports touristCenterController
 */
export default class touristCenterController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addTouristCenter(req, res) {
    try {
      const {
        gallery, name, location, about
      } = req.body;
      const { countryId } = req.params;
      const { error } = validation({
        countryId, gallery, name, location, about
      });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await db.findCountry(countryId);
      if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      const newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const centerName = await db.findTouristCenter(newName);
      if (centerName) return res.status(409).json({ status: 409, message: "This Tourist center already exists." });
      const newTouristCenter = {
        countryId, gallery, name: newName, location, about
      };
      const createdTouristCenter = await db.addTouristCenter(newTouristCenter);
      return res.status(201).json({ status: 201, message: "A Tourist Center has been added.", data: createdTouristCenter, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getAllTouristCenters(req, res) {
    try {
      const touristCenters = await db.listTouristCenters();
      return res.status(200).json({ status: 200, message: "Successfully retrived all Tourist Centers", data: touristCenters, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getTouristCenter(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const touristCenter = await db.findTouristCenterById(id);
      if (!touristCenter) return res.status(404).json({ status: 404, error: "Tourist Center not found" });
      return res.status(200).json({ status: 200, message: "Successfully retrived Tourist Center.", data: touristCenter, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateTouristCenter(req, res) {
    try {
      const { id } = req.params;
      const {
        countryId, gallery, name, location, about
      } = req.body;
      const { error } = validateId({ id, countryId });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const oldCenter = await db.findTouristCenterById(id);
      if (!oldCenter) return res.status(404).json({ status: 404, error: "Tourist Center not found" });
      if (countryId) {
        const country = await db.findCountry(countryId);
        if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      }
      let newname;
      if (name) {
        newname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        req.body.name = newname;
      }
      const newTouristCenter = await db.editTouristCenter(id, req.body);
      return res.status(200).json({ status: 200, message: "Successfully updated Tourist Center.", data: newTouristCenter[1], });
    } catch (e) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteTouristCenter(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const touristCenter = await db.findTouristCenterById(id);
      if (!touristCenter) return res.status(404).json({ status: 404, error: "Tourist Center not found" });
      await db.delTouristCenter(id);
      return res.status(200).json({ status: 200, message: "Successfully deleted Tourist Center." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
