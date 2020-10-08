import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../app";
import db from "../../models";
import countriesMockData from "../__mock__/countriesMockData";
import countryMockData from "../__mock__/countryMockData";

chai.use(chaiHttp);
const { expect } = chai;

describe("Countries api routes", () => {
  beforeEach(async () => {
    // remove any rows from database before testing
    await db.Countries.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
  });

  describe("GET multiple countries api route", () => {
    beforeEach(async () => {
      await db.Countries.create(countriesMockData[0]);
      await db.Countries.create(countriesMockData[1]);
    });
    it("returns all countries ", done => {
      chai
        .request(server)
        .get("/api/v1/get-countries")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;
          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived all countries");

          // check that all entries have all required properties
          data.forEach(country => {
            expect(country).to.have.property("id");
            expect(country).to.have.property("nameOfCountry");
            expect(country).to.have.property("gallery");
            expect(country).to.have.property("capital");
            expect(country).to.have.property("population");
            expect(country).to.have.property("officialLanguage");
            expect(country).to.have.property("region");
            expect(country).to.have.property("currency");
          });

          // check if all countries are recieved
          expect(data).to.have.length(2);

          // check that body is of the correct data type
          expect(data).to.be.an("array");
          done();
        });
    });
  });

  describe("GET country with specific id route", () => {
    beforeEach(async () => {
      await db.Countries.create(countryMockData);
    });

    it("returns country with specific id", done => {
      chai
        .request(server)
        .get("/api/v1/get-country?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;
          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived country with id 6003fb36-5112-463e-a1f9-c8944e72412f");

          // check if all countries are recieved
          // expect(data).to.have.length(2);

          // check that body is of the correct data type
          expect(data).to.be.an("object");
          done();
        });
    });

    it("returns country with all properties", done => {
      chai
        .request(server)
        .get("/api/v1/get-country?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { body } = res;
          const { data } = body;

          expect(data).to.have.property("id");
          expect(data).to.have.property("nameOfCountry");
          expect(data).to.have.property("gallery");
          expect(data).to.have.property("capital");
          expect(data).to.have.property("population");
          expect(data).to.have.property("officialLanguage");
          expect(data).to.have.property("region");
          expect(data).to.have.property("currency");

          done();
        });
    });

    it("returns an error when id is not provided when updating a country", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("id not provided please provide an id");
          done();
        });
    });

    it("returns country which matches mock", done => {
      chai
        .request(server)
        .get("/api/v1/get-country?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { body } = res;
          const { data } = body;

          expect(data.id).to.equal("6003fb36-5112-463e-a1f9-c8944e72412f");

          expect(data.nameOfCountry).to.equal("Nigeria");

          expect(data.gallery).to.equal("https://img.freepik.com/free-vector/nigeria-map-flag-national-emblem_2239-230.jpg?size=338&ext=jpg");

          expect(data.capital).to.equal("FCT Abuja");

          expect(data.population).to.equal(205);

          expect(data.region).to.equal("West Africa");

          expect(data.currency).to.equal("Naira");

          done();
        });
    });
  });

  describe("DELETE country with specific id route", () => {
    beforeEach(async () => {
      await db.Countries.create(countryMockData);
    });

    it("deletes country with specific id", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully deleted country with id 6003fb36-5112-463e-a1f9-c8944e72412f");
          done();
        });
    });

    it("returns 404 when deleting country which is not in db", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?id=6003fb36")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("Country with  id '6003fb36' not found");
          done();
        });
    });

    it("returns an error when id is not provided when deleteing a country", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("id not provided please provide an id");
          done();
        });
    });
  });

  describe("UPDATE country with specific id route", () => {
    beforeEach(async () => {
      await db.Countries.create(countryMockData);
    });

    it("updates country with specific id", done => {
      chai
        .request(server)
        .put("/api/v1/update-country?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .set("content-type", "application/json")
        .send({ population: 50000 })
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully updated country with id 6003fb36-5112-463e-a1f9-c8944e72412f");
          done();
        });
    });

    it("returns 404 when updating country which is not in db", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?id=6003fb36")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("Country with  id '6003fb36' not found");
          done();
        });
    });

    it("returns an error when id is not provided when updating a country", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-country?")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("id not provided please provide an id");
          done();
        });
    });
  });
});
