import db from "../models/index";

const countriesController = {
  /**
        * gets a list of all countries
        * @param {object} req
        * @param {object} res
        * @returns {object} list of countries
      */
  async listCountries(req, res) {
    try {
      const countries = await db.Countries.findAll({ attributes: ["id", "nameOfCountry", "gallery", "capital", "population", "officialLanguage", "region", "currency"] });
      res.status(200).send(countries);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  /**
    * gets a country with a specific id
    * @param {object} req
    * @param {object} res
    * @returns {object} country with specific id
    */
  async getCountry(req, res) {
    const { id } = req.query;
    try {
      const country = await db.Countries.findOne({
        where: {
          id,
        },
        attributes: ["id", "nameOfCountry", "gallery", "capital", "population", "officialLanguage", "region", "currency"],
      });
      res.status(200).send(country);
    } catch (error) {
      res.status(500).send(error);
    }
  },

};

export default countriesController;
