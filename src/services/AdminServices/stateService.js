import database from "../../models";

export default class Admin {
  // static async checkstatename(name) {
  //   if (name) {
  //     const stringState = String(name);
  //     stateName = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
  //     return stateName;
  //   }
  // }

  static async addState(newState) {
    try {
      return await database.States.create(newState);
    } catch (err) {
      throw err;
    }
  }

  static async checkState(stateName) {
    try {
      const stringState = String(stateName);
      const Name = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      return await database.States.findOne({ where: { name: Name } });
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
