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

import HistoricalfactModel from "../../models/historicalfact";

chai.use(sinonChai);

const { expect } = chai;

describe("src/models/historicalfact", () => {
  const Historicalfact = HistoricalfactModel(sequelize, dataTypes);
  const historicalfact = new Historicalfact();

  checkModelName(Historicalfact)("Historicalfacts");

  context("properties", () => {
    ["countryId", "about", "location", "gallery"].forEach(
      checkPropertyExists(historicalfact),
    );
  });

  context("associations", () => {
    const Countries = "Nigeria";

    before(() => {
      Historicalfact.associate({ Countries });
    });

    it("defined a belongsTo association with Countries", () => {
      expect(Historicalfact.belongsTo).to.have.been.calledWith(Countries);
    });
  });
});
