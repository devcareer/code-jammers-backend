import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

<<<<<<< HEAD
import UserModel from "../../models/User";
=======
import UserModel from "../../models/user";
>>>>>>> e6f281f... resolve merge conflict

chai.use(sinonChai);
describe("src/models/User", () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();
  checkModelName(User)("Users");
  context("properties", () => {
    ["email", "username", "password", "role"].forEach(
      checkPropertyExists(user),
    );
  });
});
