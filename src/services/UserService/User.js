import database from "../../models";

export default class User {
  static async usernameExist(username) {
    try {
      const usernameExist = await database.Users.findOne({
        where: {
          username
        }
      });
      return usernameExist;
    } catch (error) {
      throw error;
    }
  }

  static async emailExist(email) {
    try {
      return await database.Users.findOne({
        where: {
          email
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    try {
      const createUser = await database.Users.create(newUser);
      const userToUpdate = await database.Users.findOne({
        where: {
          id: createUser.id
        }
      });
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

  static async updateUserVerification(email) {
    try {
      return await database.Users.update({
        verified: true
      }, {
        where: {
          email
        },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateUserProfile(id, updateProfile) {
    try {
      const userToUpdate = await database.Users.findOne({ where: { id } });
      if (userToUpdate) {
        await database.Profiles.update(updateProfile, {
          where: { userId: userToUpdate.id }
        });
        return updateProfile;
      }
      util.setError(400, "No such user. Please check that your email is spelt correctly and try again");
      return util.send(res);
    } catch (error) {
      throw error;
    }
  }
}
