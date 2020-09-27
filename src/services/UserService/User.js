import database from "../../models";

export default class User {
  static async createUser(newUser) {
    try {
      return await database.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async checkEmail(email) {
    try {
      return await database.Users.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }

  static async checkUsername(username) {
    try {
      return await database.Users.findOne({ where: { username } });
    } catch (error) {
      throw error;
    }
  }
}
