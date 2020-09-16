<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9e045bb... feat(models): create music and food models
import chai from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

const { expect } = chai;
<<<<<<< HEAD
=======
const { expect } = require("chai");
>>>>>>> e35d052... feat(models): create models for music and food
=======
>>>>>>> 9e045bb... feat(models): create music and food models

const {
  sequelize,
  dataTypes,
  checkModelName,
<<<<<<< HEAD
<<<<<<< HEAD
  checkPropertyExists,
} = require("sequelize-test-helpers");

const foodModel = require("../../../models/food");

describe("src/models/food", () => {
  const Food = foodModel(sequelize, dataTypes);
=======
  checkUniqueIndex,
=======
>>>>>>> 9e045bb... feat(models): create music and food models
  checkPropertyExists,
} = require("sequelize-test-helpers");

const foodModel = require("../../../models/food");

<<<<<<< HEAD
describe("src/models/Food", () => {
  const Food = FoodModel(sequelize, dataTypes);
>>>>>>> e35d052... feat(models): create models for music and food
=======
describe("src/models/food", () => {
  const Food = foodModel(sequelize, dataTypes);
>>>>>>> 9e045bb... feat(models): create music and food models
  const food = new Food();

  checkModelName(Food)("Food");

  context("properties", () => {
    ["id", "countryId", "types", "methodOfPreparation", "gallery"].forEach(
      checkPropertyExists(food),
    );
  });

  context("associations", () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const Country = "Country";

    before(() => {
      Food.associate({ Country });
=======
    const Country = "some dummy Country";

    before(() => {
      User.associate({ Company });
>>>>>>> e35d052... feat(models): create models for music and food
=======
    const Country = "Country";

    before(() => {
      Food.associate({ Country });
>>>>>>> 9e045bb... feat(models): create music and food models
    });

    it("defined a belongsTo association with Country", () => {
      expect(Food.belongsTo).to.have.been.calledWith(Country);
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======

  context("indexes", () => {
    ["email", "token"].forEach(checkUniqueIndex(food));
  });
>>>>>>> e35d052... feat(models): create models for music and food
=======
>>>>>>> 9e045bb... feat(models): create music and food models
});
