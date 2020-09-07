import { expect } from "chai";
import { match, stub, resetHistory } from "sinon";
import proxyquire from "proxyquire";

import { makeMockModels } from "sequelize-test-helpers";

describe("src/utilities/save", () => {
  const Country = { findOne: stub() };
  const mockModels = makeMockModels({ Country });

  const save = proxyquire("../../../utilities/save", {
    "../models": mockModels,
  });

  const id = 1;
  const data = {
    nameOfCountry: "Nigeria",
    gallery:
      "https://img.freepik.com/free-vector/nigeria-map-flag-national-emblem_2239-230.jpg?size=338&ext=jpg",
    capital: "FCT Abuja",
    population: 205,
    officialLanguage: "English",
    region: "West Africa",
    currency: "Naira",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const fakeCountry = { id, ...data, update: stub() };

  let result;

  context("Country does not exist", () => {
    before(async () => {
      Country.findOne.resolves(undefined);
      result = await save({ id, ...data });
    });

    after(resetHistory);

    it("called Country.findOne", () => {
      expect(Country.findOne).to.have.been.calledWith(match({ where: { id } }));
    });

    it("didn't call Country.update", () => {
      expect(fakeCountry.update).not.to.have.been.called;
    });

    it("returned null", () => {
      expect(result).to.be.null;
    });
  });

  context("country exists", () => {
    before(async () => {
      fakeCountry.update.resolves(fakeCountry);
      Country.findOne.resolves(fakeCountry);
      result = await save({ id, ...data });
    });

    after(resetHistory);

    it("called Country.findOne", () => {
      expect(Country.findOne).to.have.been.calledWith(match({ where: { id } }));
    });

    it("called Country.update", () => {
      expect(fakeCountry.update).to.have.been.calledWith(match(data));
    });

    it("returned the country", () => {
      expect(result).to.deep.equal(fakeCountry);
    });
  });
});
