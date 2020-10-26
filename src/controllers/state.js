import Admin from "../services/AdminServices/stateService";
import { validation } from "../validation/stateValidation";

export default class AdminStateController {
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
      let stateName;
      if (name) {
        const stringState = String(name);
        stateName = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      }
      const state = await Admin.getState(stateName);
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
      let stateName;
      if (name) {
        const stringState = String(name);
        stateName = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      }
      await Admin.deleteState(stateName);
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

  static async updateState(req, res) {
    try {
      const { id } = req.query;
      if (!id) {
      // if id is not provided
        return res.status(404).send({
          status: 404,
          error: "id not provided please provide an id",
        });
      }
      const {
        name, countryId, capital, gallery,
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
      const stateId = await Admin.checkCountryId(countryId);
      if (!stateId) return res.status(404).json({ status: 404, message: "Country ID does not exist in the database." });
      const state = await Admin.updateState(id, newState);
      return res.status(200).send({
        status: 200,
        message: `Successfully updated country with id ${id}`,
        data: state[1],
      });
    } catch (error) {
      return res.status(404).send({
        status: 404,
        error: `Country with  id ${id} not found`,
      });
    }
  }
}
