import database from "../../models";

export default class User {
  static async usernameExist(username) {
    try {
      const usernameExist = await database.Users.findOne({ where: { username } });
      return usernameExist;
    } catch (error) {
      throw error;
    }
  }

  static async emailExist(email) {
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
        return await database.Profiles.create(newProfile);
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateUserVerification(id) {
    try {
      return await database.Users.update({ verified: true }, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }
}
