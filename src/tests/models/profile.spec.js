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
      checkPropertyExists(profile)
    );
  });
  context("associations", () => {
    const Users = "Profile data";
    before(() => {
      Profile.associate({ Users });
    });
    it("defined a belongsTo association with Profile", () => {
      expect(Profile.belongsTo).to.have.been.calledWith(Users);
    });
  });
});
