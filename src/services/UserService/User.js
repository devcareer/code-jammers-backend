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
  static async updateUserProfile(id, updateProfile) {
    try {
      const userToUpdate = await database.Users.findOne({ where: { id } });
      console.log(`Idd: ${id}`);
      console.log(`userToUpdate.id: ${userToUpdate.id}`);
      if (userToUpdate) {
        const newProfile = {
          ...updateProfile,
          userId: userToUpdate.id
        };
        const userProfile = await database.Profiles.create(newProfile);
        await database.Profiles.update(userProfile, {
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
