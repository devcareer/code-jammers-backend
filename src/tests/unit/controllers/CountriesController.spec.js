import sinon from "sinon";
import chai from "chai";
import sinonChai from "sinon-chai";
import countriesController from "../../../controllers/country/country";
import countriesMockData from "../../__mock__/countriesMockData";
import countryMockData from "../../__mock__/countryMockData";
import db from "../../../models";

chai.use(sinonChai);

const { expect } = chai;

describe("countries controllers", () => {
  it("should call the countries model findAll method with expected arguments", async () => {
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
    };
    const req = {
    };
    sinon.stub(db.Countries, "findAll").returns(countriesMockData);
    await countriesController.listCountries(req, res);
    expect(db.Countries.findAll).to.have.been.calledOnce.and.calledWith({
      attributes: ["id", "nameOfCountry", "gallery", "capital", "population", "officialLanguage", "region", "currency"],
      include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }, { model: db.EthnicGroups, as: "ethnicGroups" }]
    });
  });
});
