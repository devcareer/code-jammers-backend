import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";
import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import CultureModel from "../../../models/culture";

chai.use(sinonChai);

describe("src/models/culture", () => {
  const Culture = CultureModel(sequelize, dataTypes);
  const culture = new Culture();

  checkModelName(Culture)("Culture");

  context("properties", () => {
    ["types", "festivals", "dressing", "language", "gallery", "tribe"].forEach(
      checkPropertyExists(culture),
    );
  });
});
