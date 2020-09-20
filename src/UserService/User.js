import database from "../models";

export default class User {
  static async createUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }
<<<<<<< HEAD

  static async checkEmail(email) {
    try {
      return await database.User.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }
=======
>>>>>>> 07b9634... resolve conflicts
}
