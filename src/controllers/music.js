import db from "../services/AdminServices/musicService";
import { validation, validateId } from "../validation/musicValidation";

/**
 * @class musicController
 * @description create, read, update & delete touristcenter
 * @exports musicController
 */
export default class musicController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addMusic(req, res) {
    try {
      const {
        gallery, category
      } = req.body;
      const { countryId } = req.params;
      const { error } = validation({
        countryId, gallery, category
      });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await db.findCountry(countryId);
      if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      const centerCategory = await db.findMusicByCategory(category);
      if (centerCategory) return res.status(409).json({ status: 409, message: "Music already exists." });
      const newMusic = {
        countryId, gallery: [gallery], category
      };
      const createdMusic = await db.addMusic(newMusic);
      return res.status(201).json({ status: 201, message: "Music has been added.", data: createdMusic, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getAllMusic(req, res) {
    try {
      const music = await db.listMusic();
      return res.status(200).json({ status: 200, message: "Successfully retrived all music", data: music, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getMusic(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const music = await db.findMusicById(id);
      if (!music) return res.status(404).json({ status: 404, error: "Music not found" });
      return res.status(200).json({ status: 200, message: "Successfully retrived music.", data: music, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateMusic(req, res) {
    try {
      const { id } = req.params;
      const {
        countryId, gallery, category
      } = req.body;
      const { error } = validateId({ id, countryId });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const oldMusic = await db.findMusicById(id);
      if (!oldMusic) return res.status(404).json({ status: 404, error: "Music not found" });
      if (countryId) {
        const country = await db.findCountry(countryId);
        if (!country) return res.status(404).json({ status: 404, error: "Country does not exist" });
      }
      const newMusic = await db.editMusic(oldMusic, req.body);
      return res.status(200).json({ status: 200, message: "Successfully updated music.", data: newMusic[1], });
    } catch (e) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteMusic(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const music = await db.findMusicById(id);
      if (!music) return res.status(404).json({ status: 404, error: "Music not found" });
      await db.delMusic(id);
      return res.status(200).json({ status: 200, message: "Successfully deleted music." });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
