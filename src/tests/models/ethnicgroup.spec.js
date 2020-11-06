import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from "sequelize-test-helpers";
import chai, { expect } from "chai";

import sinonChai from "sinon-chai";
import EthnicGroupModel from "../../models/ethnicgroup";

chai.use(sinonChai);

describe("src/models/ethnicgroup", () => {
  const EthnicGroup = EthnicGroupModel(sequelize, dataTypes);
  const ethnicGroup = new EthnicGroup();

  checkModelName(EthnicGroup)("EthnicGroups");

  context("properties", () => {
    ["name", "festivals", "dressing", "language", "gallery", "culturalPractices"].forEach(
      checkPropertyExists(ethnicGroup),
    );
  });
});
