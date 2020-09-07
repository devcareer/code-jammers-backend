import { expect } from "chai";

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import CultureModel from "../../../models/culture";

describe("src/models/culture", () => {
  const Culture = CultureModel(sequelize, dataTypes);
  const culture = new Culture();

  checkModelName(Culture)("Culture");

  context("properties", () => {
    ["types", "festivals", "dressing", "language", "gallery", "tribe"].forEach(
      checkPropertyExists(culture)
    );
  });

  context("associations", () => {
    const Country = "Nigeria";

    before(() => {
      Culture.associate({ Country });
    });

    it("defined a belongsTo association with Country", () => {
      expect(Culture.belongsTo).to.have.been.calledWith(Country, {
        foreignKey: "countryId",
      });
    });
  });
});
