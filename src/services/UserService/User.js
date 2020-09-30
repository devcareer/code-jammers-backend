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

  static async createUser(newUser) {
    try {
      const createUser = await database.Users.create(newUser);
      const userToUpdate = await database.Users.findOne({ where: { id: createUser.id } });
      if (userToUpdate) {
        const newProfile = {
          userId: userToUpdate.id
        };
        await database.Profiles.create(newProfile);
        return createUser;
      }
    } catch (error) {
      throw error;
    }
  }
}
