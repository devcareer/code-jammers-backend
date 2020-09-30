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

  // static async useEmail() {

  // }

  static async createUser({ newUser }, { emailUser }) {
    try {
      if (newUser) {
        const createUser = await database.Users.create(newUser);
        return createUser;
      // eslint-disable-next-line no-else-return
      } else {
        const createUser = await database.Users.create(emailUser);
      }
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
