import chai, { expect } from "chai";

import sinonChai from "sinon-chai";

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
} from "sequelize-test-helpers";

import ProfileModel from "../../models/profile";

chai.use(sinonChai);
describe("src/models/Profile", () => {
  const Profile = ProfileModel(sequelize, dataTypes);
  const profile = new Profile();
  checkModelName(Profile)("Profile");
  context("properties", () => {
    ["firstName", "lastName", "profilePicture", "userId"].forEach(
      checkPropertyExists(profile),
    );
  });
  context("associations", () => {
    const User = "some dummy profile";
    before(() => {
      Profile.associate({ User });
    });
    it("defined a belongsTo association with User", () => {
      expect(Profile.belongsTo).to.have.been.calledWith(User);
    });
  });
});
