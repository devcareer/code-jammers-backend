import database from "../../models";
import util from "../../utilities/util";

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
        await database.Profiles.create(newProfile);
        return createUser;
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateUserRole(id, updateUserRole) {
    try {
      const userRoleToUpdate = await database.Users.findOne({ where: { id } });
      if (userRoleToUpdate) {
        await database.Users.update(updateUserRole, {
          where: { id }
        });
        return updateUserRole;
      }
      // util.setError(400, `Sorry, cannot make ${username} an admin`);
      // return util.send(res);
    } catch (error) {
      throw error;
    }
  }
}
