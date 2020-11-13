import Admin from "../../services/AdminServices/countryService";
import { validation } from "../../validation/countryValidation";
import db from "../../models";

const countriesAttributes = [
  "id",
  "nameOfCountry",
  "gallery",
  "capital",
  "population",
  "officialLanguage",
  "region",
  "currency",
];

/**
 * @class AdminController
 * @description create country
 * @exports AdminController
 */
export default class AdminController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addCountry(req, res) {
    try {
      const {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      } = req.body;
      const countryName = await Admin.countryName(nameOfCountry);
      const newCountry = {
        nameOfCountry: countryName, gallery, capital, population, officialLanguage, region, currency
      };
      const { error } = validation(newCountry);
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
   * gets a list of all countries
   *
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} list of countries
   */
  static async listCountries(req, res) {
    try {
      const countries = await db.Countries.findAll({
        attributes: countriesAttributes,
        include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }, { model: db.EthnicGroups, as: "ethnicGroups" }, { model: db.Music, as: "music" }, { model: db.Foods, as: "Food" }, { model: db.Historicalfacts, as: "historicalFacts" }, { model: db.EthnicGroups, as: "ethnicGroups" }, { model: db.Music, as: "music" }, { model: db.Foods, as: "Food" }, { model: db.Comments, as: "comments" }]
      });
      return res.status(200).send({
        status: 200,
        message: "Successfully retrived all countries",
        data: countries,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  /**
   * gets a country with a specific id
   *
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} country with specific id
   */
  static async getCountry(req, res) {
    const { id } = req.params;
    try {
      const country = await db.Countries.findOne({
        where: { id },
        attributes: countriesAttributes,
        include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }, { model: db.EthnicGroups, as: "ethnicGroups" }, { model: db.Music, as: "music" }, { model: db.Foods, as: "Food" }, { model: db.Historicalfacts, as: "historicalFacts" }, { model: db.Comments, as: "comments" }]
      });

      if (!country) {
        return res.status(404).send({ status: 404, error: "Resource not found.", });
      }

      return res.status(200).send({ status: 200, message: "Successfully retrived country", data: country, });
    } catch (error) {
      return res.status(404).send({ status: 404, error: "Resource not found.", });
    }
  }

  /**
   * deletes a country with the specified id
   *
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} - result
   */
  static async deleteCountry(req, res) {
    const { id } = req.params;
    try {
      const country = await db.Countries.findOne({
        where: {
          id,
        },
        attributes: countriesAttributes,
      });

      await country.destroy({ cascade: true });

      return res.status(200).send({ status: 200, message: "Successfully deleted country", });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: "Resource not found.",
      });
    }
  }

  /**
   * updates a country with a specified id
   *
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} - result
   */
  static async updateCountry(req, res) {
    const { id } = req.params;
    try {
      const result = await db.Countries.update(req.body, {
        where: { id },
        returning: true
      });
      return res.status(200).send({
        status: 200,
        message: "Successfully updated country",
        data: result[1][0].get()
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: "Resource not found.",
      });
    }
  }
}
