import database from "../models";


export default class User {
  static async createUser(newUser) {
    try {
      return await database.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}
