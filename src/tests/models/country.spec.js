import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";
import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import CountryModel from "../../models/countries";

chai.use(sinonChai);

describe("src/models/countries", () => {
  const Country = CountryModel(sequelize, dataTypes);
  const country = new Country();

  checkModelName(Country)("Countries");

  context("properties", () => {
    [
      "nameOfCountry",
      "gallery",
      "capital",
      "population",
      "officialLanguage",
      "region",
      "currency",
    ].forEach(checkPropertyExists(country));
  });

  context("associations", () => {
    const Cultures = "culture data";

    before(() => {
      Country.associate({ Cultures });
    });

    it("defined a hasMany association with Cultures", () => {
      expect(Country.hasMany).to.have.been.calledWith(Cultures);
    });
  });
});
