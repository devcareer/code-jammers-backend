import chai from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const cityModel = require("../../../models/city");
const CountryModel = require("../../../models/countries");

describe("src/models/City", () => {
  const City = cityModel(sequelize, dataTypes);
  const city = new City();
  checkModelName(City)("Cities");

  context("properties", () => {
    ["location", "gallary", "name"].forEach(checkPropertyExists(city));
  });

  context("associations", () => {
    const Country = "Zambia";

    before(() => {
      City.associate({ Country });
      City.belongsTo(CountryModel, { as: "cities", foreignKey: "countryId" });
    });

    it("defined a belongsTo association with Country", () => {
      expect(City.belongsTo).to.have.been.calledWith(Country);
      expect(City.belongsTo).to.have.been.calledWith(CountryModel, {
        as: "cities",
        foreignKey: "countryId",
      });
    });
  });
});
