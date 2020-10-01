import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import UserModel from "../../models/User";

chai.use(sinonChai);
describe("src/models/User", () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();
  checkModelName(User)("Users");
  context("properties", () => {
    ["email", "username", "password", "role", "verified"].forEach(
      checkPropertyExists(user),
    );
  });
});
