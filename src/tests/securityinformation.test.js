import { expect } from "chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  makeMockModels,
} from "sequelize-test-helpers";

import SecurityinformationModel from "../models/securityinformation";

describe("src/models/securityinformation", () => {
  const Securityinformation = SecurityinformationModel(sequelize, dataTypes);
  const securityinformation = new Securityinformation();

  checkModelName(Securityinformation)("Securityinformation");

  context("properties", () => {
    ["countryId", "location"].forEach(
      checkPropertyExists(securityinformation),
    );
  });

  context("associations", () => {
    const Country = "Nigeria";

    before(() => {
      Securityinformation.associate({ Country });
    });

    it("defined a belongsTo association with Country", () => {
      expect(Securityinformation.belongsTo).to.have.been.calledWith(Country);
    });
  });
});
