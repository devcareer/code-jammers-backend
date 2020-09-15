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

const NewsletterModel = require("../../../models/newsletter.js");

describe("src/models/newsletter", () => {
  const Newsletter = NewsletterModel(sequelize, dataTypes);
  const newsletter = new Newsletter();

  checkModelName(Newsletter)("Newsletter");

  context("properties", () => {
    ["email", "message"].forEach(checkPropertyExists(newsletter));
  });
});
