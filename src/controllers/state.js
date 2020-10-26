import Admin from "../services/AdminServices/stateService";
import { validation } from "../validation/stateValidation";

/**
 * @class AdminStateController
 * @description create state, get all states, get a state, delete a state, update a state
 * @exports AdminController
 */
export default class AdminStateController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addState(req, res) {
    try {
      const {
        name, countryId, gallery, capital
      } = req.body;
      let stateName;
      if (name) {
        const stringCountry = String(name);
        stateName = stringCountry[0].toUpperCase() + stringCountry.slice(1).toLowerCase();
      }
      const state = await Admin.checkState(stateName);
      if (state) return res.status(409).json({ status: 409, message: `${stateName} state already exists in the database.` });
      const stateId = await Admin.checkCountryId(countryId);
      if (!stateId) return res.status(404).json({ status: 404, message: ` ${countryId}Country ID does not exist in the database.` });
      const newState = {
        name: stateName, gallery, capital, countryId
      };
      const { error } = validation(newState);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const createdState = await Admin.addState(newState);
      return res.status(201).json({ status: 201, message: "A state has been added.", data: createdState, });
    } catch (error) {
      res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async listStates(req, res) {
    try {
      const states = await Admin.getAllStates();
      res.status(200).send({
        status: 200,
        message: "Successfully retrived all States",
        data: states,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getState(req, res) {
    const { name } = req.query;
    if (!name) {
      // if id is not provided
      return res.status(404).send({
        status: 404,
        error: "name not provided please provide a state name",
      });
    }
    try {
      const stateName = await Admin.checkState(name);
      const state = await Admin.getState(stateName.name);
      return res.status(200).send({
        status: 200,
        message: `Successfully retrived ${name} state`,
        data: state,
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `'${name}' State does not exists in the database`,
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteState(req, res) {
    const { name } = req.query;

    if (!name) {
      // if id is not provided
      return res.status(404).send({
        status: 404,
        error: "State name not provided please provide a state name",
      });
    }
    try {
      const deleteName = await Admin.checkState(name);
      await Admin.deleteState(deleteName.name);
      return res.status(200).send({
        status: 200,
        message: `Successfully Deleted ${name} state`,
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `'${name}' state does not exists in the database`,
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateState(req, res) {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(404).send({ status: 404, error: "id not provided please provide an id", });
      }
      const {
        name, countryId, capital, gallery,
      } = req.body;
      const newName = await Admin.checkState(id);
      const newState = {
        name, gallery, capital, countryId
      };
      const { error } = validation(newState);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const state = await Admin.updateState(newName.name, newState);
      return res.status(200).send({ status: 200, message: `Successfully updated ${newName.name} State`, data: state[1], });
    } catch (error) {
      return res.status(404).send({ status: 404, error: "sorry State does not exist in the database", });
    }
  }
}
