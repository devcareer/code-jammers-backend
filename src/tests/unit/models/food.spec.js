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

const foodModel = require("../../../models/food");

describe("src/models/food", () => {
  const Food = foodModel(sequelize, dataTypes);
  const food = new Food();

  checkModelName(Food)("Food");

  context("properties", () => {
    ["countryId", "types", "methodOfPreparation", "gallery"].forEach(
      checkPropertyExists(food),
    );
  });
  context("associations", () => {
    const Country = "Country";

    before(() => {
      Food.associate({ Country });
    });

    it("defined a belongsTo association with Country", () => {
      expect(Food.belongsTo).to.have.been.calledWith(Country);
    });
  });
});
