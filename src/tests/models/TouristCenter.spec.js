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

const touristCenterModel = require("../../models/touristCenter");
const CountryModel = require("../../models/countries");

describe("src/models/Tourist Center", () => {
  const TouristCenter = touristCenterModel(sequelize, dataTypes);
  const touristCenter = new TouristCenter();
  checkModelName(TouristCenter)("TouristCenters");

  context("properties", () => {
    ["location", "gallery", "name"].forEach(checkPropertyExists(touristCenter));
  });

  context("associations", () => {
    const Countries = "Zambia";

    before(() => {
      TouristCenter.associate({ Countries });
      TouristCenter.belongsTo(CountryModel, {
        as: "touristCenters",
        foreignKey: "countryId",
      });
    });

    it("defined a belongsTo association with Country", () => {
      expect(TouristCenter.belongsTo).to.have.been.calledWith(Countries);
      expect(TouristCenter.belongsTo).to.have.been.calledWith(CountryModel, {
        as: "touristCenters",
        foreignKey: "countryId",
      });
    });
  });
});
