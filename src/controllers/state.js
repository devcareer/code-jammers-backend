import Admin from "../services/AdminServices/stateService";
import { validation } from "../validation/stateValidation";

/**
 * @class AdminController
 * @description create country
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
        const stringState = String(name);
        stateName = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      }
      const newState = {
        name: stateName, gallery, capital, countryId
      };
      const { error } = validation(newState);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const state = await Admin.checkState(stateName);
      if (state) return res.status(409).json({ status: 409, message: "This state already exists in the database." });
      const stateId = await Admin.checkCountryId(countryId);
      if (!stateId) return res.status(404).json({ status: 404, message: "Country ID does not exist in the database." });
      const createdState = await Admin.addState(newState);
      return res.status(201).json({ status: 201, message: "A state has been added.", data: createdState, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  static async listStates(req, res) {
    try {
      const states = await Admin.getAllStates();
      res.status(200).send({
        status: 200,
        message: "Successfully retrived all countries",
        data: states,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  }
}
