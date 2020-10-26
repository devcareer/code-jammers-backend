import sinon from "sinon";
import chai from "chai";
import sinonChai from "sinon-chai";
import countriesController from "../../../controllers/countriesController";
import countriesMockData from "../../__mock__/countriesMockData";
import countryMockData from "../../__mock__/countryMockData";
import db from "../../../models";

chai.use(sinonChai);

const { expect } = chai;

describe("create", () => {
  it("should call the countries model findAll method with expected arguments", async () => {
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
      send: () => countriesMockData,
    };
    const req = {
    };
    sinon.stub(db.Countries, "findAll").returns(countriesMockData);
    await countriesController.listCountries(req, res);
    expect(db.Countries.findAll).to.have.been.calledOnce.and.calledWith({
      attributes: ["id", "nameOfCountry", "gallery", "capital", "population", "officialLanguage", "region", "currency"],
    });
  });

  it("should call the countries model findOne method with expected arguments", async () => {
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
      send: () => countryMockData,
    };
    const req = {
      query: {
        id: "6003fb36-5112-463e-a1f9-c8944e72412f",
      },
    };
    sinon.stub(db.Countries, "findOne").returns(countryMockData);
    await countriesController.getCountry(req, res);
    expect(db.Countries.findOne).to.have.been.calledWith({
      attributes: ["id", "nameOfCountry", "gallery", "capital", "population", "officialLanguage", "region", "currency"],
      where: { id: req.query.id },
    });
  });
});
