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

const CommentModel = require("../../../models/comment.js");

describe("src/models/comment", () => {
  const Comment = CommentModel(sequelize, dataTypes);
  const comment = new Comment();

  checkModelName(Comment)("Comment");

  context("properties", () => {
    ["userId", "comment"].forEach(checkPropertyExists(comment));
  });

  context("associations", () => {
    const User = "John Doe";

    before(() => {
      Comment.associate({ User });
    });

    it("defined a belongsTo association with User", () => {
      expect(Comment.belongsTo).to.have.been.calledWith(User);
    });
  });
});
