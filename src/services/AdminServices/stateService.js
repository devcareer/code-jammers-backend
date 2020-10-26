import database from "../../models";

export default class Admin {
  static async addState(newState) {
    try {
      return await database.States.create(newState);
    } catch (err) {
      throw err;
    }
  }

  static async checkState(stateName) {
    try {
      return await database.States.findOne({ where: { name: stateName } });
    } catch (err) {
      throw err;
    }
  }

  static async checkCountryId(id) {
    try {
      return await database.Countries.findOne({ where: { id } });
    } catch (err) {
      throw err;
    }
  }

  static async getAllStates() {
    try {
      return await database.States.findAll({ attributes: ["name", "countryId", "capital", "gallery"] });
    } catch (err) {
      throw err;
    }
  }

  static async getState(name) {
    try {
      return await database.States.findOne({ where: { name } });
    } catch (err) {
      throw err;
    }
  }

  static async deleteState(name) {
    try {
      const state = await database.States.findOne({ where: { name } });
      return await state.destroy();
    } catch (err) {
      throw err;
    }
  }

  static async updateState(id, state) {
    try {
      return await database.States.update(state, {
        where: { name: id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
