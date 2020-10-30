import sinon from "sinon";
import chai from "chai";
import sinonChai from "sinon-chai";
import AdminStateController from "../../../controllers/state";
import statesData from "./statesData";
import stateData from "./stateData";
import database from "../../../models";

chai.use(sinonChai);

const { expect } = chai;

describe("create", () => {
  it("should call the states model findAll method with expected arguments", async () => {
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
      send: () => statesData,
    };
    const req = {
    };
    sinon.stub(database.States, "findAll").returns(statesData);
    await AdminStateController.getStates(req, res);
    expect(database.States.findAll).to.have.been.calledOnce.and.calledWith({
      attributes: ["name", "countryId", "gallery", "capital"],
    });
  });

  it("should call the States model findOne method with expected arguments", async () => {
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
      send: () => stateData,
    };
    const req = {
      query: {
        name: "Lagos",
      },
    };
    sinon.stub(database.States, "findOne").returns(stateData);
    await AdminStateController.getstate(req, res);
    expect(database.States.findOne).to.have.been.calledWith({
      attributes: ["id", "name", "countryId", "gallery", "capital"],
      where: { name: req.query.name },
    });
  });
});
