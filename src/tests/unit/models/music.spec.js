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

const musicModel = require("../../../models/music");

describe("src/models/Music", () => {
  const Music = musicModel(sequelize, dataTypes);
  const music = new Music();
  checkModelName(Music)("Music");

  context("properties", () => {
    ["countryId", "category", "gallery", "event"].forEach(
      checkPropertyExists(music),
    );
  });

  context("associations", () => {
    const Country = "Nigeria";

    before(() => {
      Music.associate({ Country });
    });

    it("defined a belongsTo association with Country", () => {
      expect(Music.belongsTo).to.have.been.calledWith(Country);
    });
  });
});
