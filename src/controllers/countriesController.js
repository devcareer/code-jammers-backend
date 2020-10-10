import db from "../models";

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
const countriesController = {
  /**
   * gets a list of all countries
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} list of countries
   */
  async listCountries(req, res) {
    try {
      const countries = await db.Countries.findAll({
        attributes: countriesAttributes,
      });
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
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} country with specific id
   */
  async getCountry(req, res) {
    const { id } = req.query;

    if (!id) {
      // if id is not provided
      return res.status(404).send({
        status: 404,
        error: "id not provided please provide an id",
      });
    }
    try {
      const country = await db.Countries.findOne({
        where: {
          id,
        },
        attributes: countriesAttributes,
      });

      return res.status(200).send({
        status: 200,
        message: `Successfully retrived country with id ${id}`,
        data: country,
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `Country with  id '${id}' not found`,
      });
    }
  },
  /**
    * deletes a country with the specified id
    * @param {object} req - request object
    * @param {object} res - response object
    * @return {object} returns result
    */
  async deleteCountry(req, res) {
    const { id } = req.query;
    if (!id) {
      // if id is not provided
      return res.status(404).send({
        status: 404,
        error: "id not provided please provide an id",
      });
    }
    try {
      const country = await db.Countries.findOne({
        where: {
          id,
        },
        attributes: countriesAttributes,
      });

      return res.status(200).send({
        status: 200,
        message: `Successfully retrived country with id ${id}`,
        data: country,
      });

      // delete country from database
      await country.destroy();

      return res.status(200).send({
        status: 200,
        message: `Successfully deleted country with id ${id}`,
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `Country with  id '${id}' not found`,
      });
    }
  },
  /**
    * updates a country with a specified id
    * @param {object} req - request object
    * @param {object} res - response object
    * @returns {object} - returns result
    */
  async updateCountry(req, res) {
    const { id } = req.query;
    if (!id) {
      // if id is not provided
      return res.status(404).send({
        status: 404,
        error: "id not provided please provide an id",
      });
    }
    try {
      await db.Countries.update(req.body, {
        where: { id },
      });
      return res.status(200).send({
        status: 200,
        message: `Successfully updated country with id ${id}`,
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `Country with  id '${id}' not found`,
      });
    }
  },
<<<<<<< HEAD
=======

>>>>>>> 59e2f4d... fixed failing test for delete cuontries route
};

export default countriesController;
