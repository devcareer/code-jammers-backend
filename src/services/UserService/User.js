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
        await database.Profiles.create(newProfile);
        return createUser;
      }
    } catch (error) {
      throw error;
    }
  }

  static checkIfVerified(userDelails, res) {
    if (!userDelails.verified) return res.status(400).send({ message: "Please Verify your account to continue. click on the link provided in your mail" });
  }

  static async updateUserVerification(email) {
    try {
      return await database.Users.update({ verified: true }, {
        where: { email },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }
}
