import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  makeMockModels,
} from "sequelize-test-helpers";

import HisoricalfactModel from "../models/hisoricalfact";

describe("src/models/hisoricalfact", () => {
  const Hisoricalfact = HisoricalfactModel(sequelize, dataTypes);
  const hisoricalfact = new Hisoricalfact();

  checkModelName(Hisoricalfact)("Hisoricalfact");

  context("properties", () => {
    ["countryId", "location", "gallery"].forEach(
      checkPropertyExists(hisoricalfact),
    );
  });

  //   context("associations", () => {
  //     const Country = "Nigeria";

  //     before(() => {
  //       Hisoricalfact.associate({ Country });
  //     });

  //     it("defined a belongsTo association with Country", () => {
  //       expect(Historicalfact.belongsTo).to.have.been.calledWith(Country);
  //     });
  //   });
});
