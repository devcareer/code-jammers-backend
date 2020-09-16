<<<<<<< HEAD
import chai from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

const { expect } = chai;
=======
const { expect } = require("chai");
>>>>>>> e35d052... feat(models): create models for music and food

const {
  sequelize,
  dataTypes,
  checkModelName,
<<<<<<< HEAD
  checkPropertyExists,
} = require("sequelize-test-helpers");

const foodModel = require("../../../models/food");

describe("src/models/food", () => {
  const Food = foodModel(sequelize, dataTypes);
=======
  checkUniqueIndex,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const FoodModel = require("../../src/models/Food");

describe("src/models/Food", () => {
  const Food = FoodModel(sequelize, dataTypes);
>>>>>>> e35d052... feat(models): create models for music and food
  const food = new Food();

  checkModelName(Food)("Food");

  context("properties", () => {
    ["countryId", "types", "methodOfPreparation", "gallery"].forEach(
      checkPropertyExists(food),
    );
  });

  context("associations", () => {
<<<<<<< HEAD
    const Country = "Country";

    before(() => {
      Food.associate({ Country });
=======
    const Country = "some dummy Country";

    before(() => {
      User.associate({ Company });
>>>>>>> e35d052... feat(models): create models for music and food
    });

    it("defined a belongsTo association with Country", () => {
      expect(Food.belongsTo).to.have.been.calledWith(Country);
    });
  });
<<<<<<< HEAD
=======

  context("indexes", () => {
    ["email", "token"].forEach(checkUniqueIndex(food));
  });
>>>>>>> e35d052... feat(models): create models for music and food
});
