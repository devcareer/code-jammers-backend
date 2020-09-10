import chai from "chai";
import { expect } from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import CountryModel from "../../../models/countries";

describe("src/models/countries", () => {
  const Country = CountryModel(sequelize, dataTypes);
  const country = new Country();

  checkModelName(Country)("Country");

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
    const Culture = "culture data";

    before(() => {
      Country.associate({ Culture });
    });

    it("defined a hasMany association with Culture", () => {
      expect(Country.hasMany).to.have.been.calledWith(Culture);
    });
  });
});
