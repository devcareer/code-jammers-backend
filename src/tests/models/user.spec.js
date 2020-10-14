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
<<<<<<< HEAD
<<<<<<< HEAD
    ["email", "username", "password", "role", "verified"].forEach(
=======
    ["email", "username", "password", "role", "resetPasswordToken", "resetPasswordExpires"].forEach(
>>>>>>> cd38d9f... Add changes to test files
=======
    ["email", "username", "password", "role"].forEach(
>>>>>>> 8a5572a... refactor code to follow standards
      checkPropertyExists(user),
    );
  });
});
