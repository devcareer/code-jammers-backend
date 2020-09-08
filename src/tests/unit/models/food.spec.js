const { expect } = require("chai");

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const FoodModel = require("../../src/models/Food");

describe("src/models/Food", () => {
  const Food = FoodModel(sequelize, dataTypes);
  const food = new Food();

  checkModelName(Food)("Food");

  context("properties", () => {
    ["countryId", "types", "methodOfPreparation", "gallery"].forEach(
      checkPropertyExists(food),
    );
  });

  context("associations", () => {
    const Country = "some dummy Country";

    before(() => {
      User.associate({ Company });
    });

    it("defined a belongsTo association with Country", () => {
      expect(Food.belongsTo).to.have.been.calledWith(Country);
    });
  });

  context("indexes", () => {
    ["email", "token"].forEach(checkUniqueIndex(food));
  });
});
