import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import foodModel from "../../models/food";

chai.use(sinonChai);

describe("src/models/food", () => {
  const Food = foodModel(sequelize, dataTypes);
  const food = new Food();

  checkModelName(Food)("Foods");

  context("properties", () => {
    ["countryId", "type", "methodOfPreparation", "gallery"].forEach(checkPropertyExists(food));
  });
  context("associations", () => {
    const Countries = "Countries";

    before(() => {
      Food.associate({ Countries });
    });

    it("defined a belongsTo association with Countries", () => {
      expect(Food.belongsTo).to.have.been.calledWith(Countries);
    });
  });
});
