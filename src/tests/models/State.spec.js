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

const stateModel = require("../../models/state");
const CountryModel = require("../../models/countries");

describe("src/models/State", () => {
  const State = stateModel(sequelize, dataTypes);
  const state = new State();
  checkModelName(State)("States");

  context("properties", () => {
    ["capital", "gallery", "name"].forEach(checkPropertyExists(state));
  });

  context("associations", () => {
    const Countries = "Zambia";

    before(() => {
      State.associate({ Countries });
      State.belongsTo(CountryModel, { as: "states", foreignKey: "countryId" });
    });

    it("defined a belongsTo association with Countries", () => {
      expect(State.belongsTo).to.have.been.calledWith(Countries);
      expect(State.belongsTo).to.have.been.calledWith(CountryModel, {
        as: "states",
        foreignKey: "countryId",
      });
    });
  });
});
