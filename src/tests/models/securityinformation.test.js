import chai from "chai";
import sinonChai from "sinon-chai";

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  makeMockModels,
} from "sequelize-test-helpers";

import SecurityinformationModel from "../../models/securityinformation";

chai.use(sinonChai);

const { expect } = chai;

describe("src/models/securityinformation", () => {
  const Securityinformation = SecurityinformationModel(sequelize, dataTypes);
  const securityinformation = new Securityinformation();

  checkModelName(Securityinformation)("Securityinformations");

  context("properties", () => {
    ["countryId", "about", "location"].forEach(
      checkPropertyExists(securityinformation),
    );
  });

  context("associations", () => {
    const Countries = "Nigeria";

    before(() => {
      Securityinformation.associate({ Countries });
    });

    it("defined a belongsTo association with Countries", () => {
      expect(Securityinformation.belongsTo).to.have.been.calledWith(Countries);
    });
  });
});
