import database from "../../models";

export default class Admin {
  static async addCountry(newCountry) {
    try {
      return await database.Countries.create(newCountry);
    } catch (error) {
      throw error;
    }
  }

  static async checkCountry(nameOfCountry) {
    try {
      return await database.Countries.findOne({ where: { nameOfCountry } });
    } catch (error) {
      throw error;
    }
  }
}
