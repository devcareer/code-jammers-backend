import sinon from "sinon";
import chai from "chai";
import sinonChai from "sinon-chai";
import resetPasswordController from "../../../controllers/resetPasswordController";
import {
  user, notUser, newPassword, signed
} from "./reset-test-data";
import db from "../../../models";
import utils from "../../../utilities/index";

const { sendEmail } = utils;
chai.use(sinonChai);

const { expect } = chai;
const positiveResponse = { status: 200, message: "A reset email has been sent" };
const sandbox = sinon.createSandbox();

afterEach(() => { sandbox.restore(); });

describe("send recover email", () => {
  it("should send a recovery email to user email in db", async () => {
    const res = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: () => positiveResponse }),
      send: () => user,
    };
    const req = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: sinon.spy() }),
      body: { email: user.email },
      send: () => user,
    };
    sandbox.stub(db.Users, "findOne").returns(user);
    sandbox.stub(utils, "sendEmail").returns({ status: 200, message: "A reset email has been sent" });

    resetPasswordController.recover(req, res);

    expect(db.Users.findOne).to.have.been.calledOnce.and.calledWith({
      attributes: ["id", "username", "email", "password"],
      where: { email: user.email }
    });
  });
});
describe("fail send recovery email", () => {
  it("should fail to send a recovery email to user not in db", async () => {
    const res = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: sinon.spy(), json: sinon.spy() }),
      body: { email: notUser.email },
      send: () => notUser,
    };
    const req = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: sinon.spy() }),
      body: { email: notUser.email },
      send: () => notUser,
    };
    sandbox.stub(db.Users, "findOne").returns(null);
    resetPasswordController.recover(req, res);
    expect(db.Users.findOne).to.have.been.calledOnce.and.calledWith({
      attributes: ["id", "username", "email", "password"],
      where: { email: notUser.email }
    });
  });
});
describe("change password", () => {
  it("should change password successfully", async () => {
    const res = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: sinon.spy(), json: sinon.spy() }),
      body: { newPassword: newPassword.newPassword, id: user.id },
      send: () => user,
    };
    const req = {
      json: sinon.spy(),
      status: sandbox.stub().returns({ send: sinon.spy() }),
      body: { newPassword: newPassword.newPassword, id: user.id },
      send: () => user,
      params: { id: user.id, token: signed }
    };
    const { id } = user;
    sandbox.stub(db.Users, "findOne").resolves(user);
    resetPasswordController.reset(req, res);
    expect(db.Users.findOne).to.have.been.calledOnce.and.calledWith({
      where: { id },
      attributes: ["id", "username", "email", "password"]
    });
  });
});
