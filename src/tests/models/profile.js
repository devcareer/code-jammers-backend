import chai, { expect } from "chai";

import sinonChai from "sinon-chai";

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import ProfileModel from "../../models/profile";

chai.use(sinonChai);
describe("src/models/Profile", () => {
  const Profile = ProfileModel(sequelize, dataTypes);
  const profile = new Profile();
  checkModelName(Profile)("Profiles");
  context("properties", () => {
    ["firstName", "lastName", "profilePicture", "userId"].forEach(
      checkPropertyExists(profile),
    );
  });
  context("associations", () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const Users = "Profile data";
    before(() => {
      Profile.associate({ Users });
    });
    it("defined a belongsTo association with Profile", () => {
      expect(Profile.belongsTo).to.have.been.calledWith(Users);
=======
    const User = "Profile data";
=======
    const Users = "Profile data";
>>>>>>> 30aa778... fix undefined error
    before(() => {
      Profile.associate({ Users });
    });
    it("defined a belongsTo association with Profile", () => {
<<<<<<< HEAD
      expect(Profile.belongsTo).to.have.been.calledWith(User);
>>>>>>> e6f281f... resolve merge conflict
=======
      expect(Profile.belongsTo).to.have.been.calledWith(Users);
>>>>>>> 30aa778... fix undefined error
    });
  });
});
