import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import UserModel from "../../models/user";

chai.use(sinonChai);
describe("src/models/User", () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();
  checkModelName(User)("User");
  context("properties", () => {
    ["email", "username", "password", "role"].forEach(
      checkPropertyExists(user),
    );
  });
  context("associations", () => {
    const Profile = "profile data";
    before(() => {
      User.associate({ Profile });
    });
    it("defined a belongsTo association with Profile", () => {
      expect(User.belongsTo).to.have.been.calledWith(Profile);
    });
  });
});
