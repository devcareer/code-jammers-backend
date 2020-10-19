import database from "../../models";

export default class Admin {
  static async addCountry(newCountry) {
    try {
      return await database.Countries.create(newCountry);
    } catch (err) {
      throw err;
    }
  }

  static async checkCountry(countryName) {
    try {
      return await database.Countries.findOne({ where: { nameOfCountry: countryName } });
    } catch (err) {
      throw err;
    }
  }
}
