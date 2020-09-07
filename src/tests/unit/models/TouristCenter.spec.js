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

const touristCenterModel = require("../../../models/touristCenter");

describe("src/models/Tourist Center", () => {
  const TouristCenter = touristCenterModel(sequelize, dataTypes);
  const touristCenter = new TouristCenter();
<<<<<<< HEAD
  checkModelName(TouristCenter)("TouristCenters");

  context("properties", () => {
    ["location", "gallary", "name"].forEach(checkPropertyExists(touristCenter));
=======
  checkModelName(TouristCenter)("TouristCenter");

  context("properties", () => {
    ["id", "location", "gallary", "name"].forEach(
      checkPropertyExists(touristCenter),
    );
>>>>>>> 048f235... feature(tourist-city-models) - create models
  });

  context("associations", () => {
    const Country = "Zambia";

    before(() => {
      TouristCenter.associate({ Country });
    });

    it("defined a belongsTo association with Country", () => {
      expect(TouristCenter.belongsTo).to.have.been.calledWith(Country);
    });
  });
});
