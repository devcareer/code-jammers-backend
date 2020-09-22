import db from "../models";

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
      res.status(200).send({
        status: 200,
        message: "Successfully retrived all countries",
        data: countries,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
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

<<<<<<< HEAD
      return res.status(200).send({
=======
      res.status(200).send({
>>>>>>> b28d60a... feature(get country routes): create get country routes
        status: 200,
        message: `Successfully retrived country with id ${id}`,
        data: country,
      });
    } catch (error) {
<<<<<<< HEAD
      return res.status(404).send({
=======
      res.status(404).send({
>>>>>>> b28d60a... feature(get country routes): create get country routes
        status: 404,
        error: `Country with  id '${id}' not found`,
      });
    }
  },

};

export default countriesController;
