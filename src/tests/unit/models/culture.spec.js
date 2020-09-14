import chai from "chai";
import { expect } from "chai";
import sinonChai from "sinon-chai";
import CultureModel from "../../../models/culture";
chai.use(sinonChai);

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

describe("src/models/culture", () => {
  const Culture = CultureModel(sequelize, dataTypes);
  const culture = new Culture();

  checkModelName(Culture)("Culture");

  context("properties", () => {
    ["types", "festivals", "dressing", "language", "gallery", "tribe"].forEach(
      checkPropertyExists(culture)
    );
  });
});
