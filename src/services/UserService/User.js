import database from "../../models";

/**
 * @class User
 * @description User services
 * @exports User
 */
export default class User {
  /**
   * @param {string} username - The user name
   * @returns {object} - An instance of the Users model class
   */
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

  /**
   * @param {string} email  - The user email
   * @returns {object} - An instance of the Users model class
   */
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

  /**
   * @param {object} newUser - The user details
   * @returns {object} - An instance of the Users model class
   */
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

  /**
   * @param {string} email - The user email
   * @returns {object} - An instance of the Users model class
   */
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

  static async recoverPassword(email) {
    try {
      return await db.Users.findOne({
        where: { email },
      });
    } catch (error) {
      throw error;
    }
  }
}
