import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";

import musicModel from "../../../models/music";

describe("src/models/music", () => {
  const Music = musicModel(sequelize, dataTypes);
  const music = new Music();
  checkModelName(Music)("Musics");

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