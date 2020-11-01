import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../app";
import { user4 } from "../controllers/users/user-sign-in-test-data";
import db from "../../models";
import countryMockData from "../__mock__/countryMockData";

chai.use(chaiHttp);
const { expect } = chai;

describe("Countries api routes", () => {
  let adminToken;
  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .set("Accept", "application/json")
      .send(user4)
      .end((err, res) => {
        if (err) throw err;
        adminToken = res.body.token;
        done();
      });
  });

  describe("GET multiple countries api route", () => {
    beforeEach(async () => {
      await db.Countries.create(countryMockData);
    });
    it("returns all countries ", done => {
      chai
        .request(server)
        .get("/api/v1/countries")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;

          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived all countries");

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

          expect(data).to.be.an("array");
          done();
        });
    });
  });

  describe("GET country with specific id route", () => {
    it("returns country with specific id", done => {
      chai
        .request(server)
        .get("/api/v1/country/030f7257-5fa4-4015-a1f0-b17408a11e30")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;

          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived country");

          expect(data).to.be.an("object");
          done();
        });
    });

    it("returns country with all properties", done => {
      chai
        .request(server)
        .get("/api/v1/country/030f7257-5fa4-4015-a1f0-b17408a11e30")
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

    it("returns country which matches mock", done => {
      chai
        .request(server)
        .get("/api/v1/country/030f7257-5fa4-4015-a1f0-b17408a11e30")
        .end((err, res) => {
          const { body } = res;
          const { data } = body;

          expect(data.id).to.equal("030f7257-5fa4-4015-a1f0-b17408a11e30");

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
    it("deletes country with specific id", done => {
      chai
        .request(server)
        .delete("/api/v1/admin/country/030f7257-5fa4-4015-a1f0-b17408a11e30").set("Authorization", `Bearer ${adminToken}`)
        .end((err, res) => {
          const { status, body } = res;

          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully deleted country");
          done();
        });
    });

    it("returns 404 when deleting country which is not in db", done => {
      chai
        .request(server)
        .delete("/api/v1/admin/country/6003fb36").set("Authorization", `Bearer ${adminToken}`)
        .end((err, res) => {
          const { status, body } = res;

          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("Resource not found.");
          done();
        });
    });
  });

  describe("UPDATE country with specific id route", async () => {
    before(async () => {
      await db.Countries.create({
        id: "074019c3-2bc6-40e4-88e2-dd347ed74712",
        nameOfCountry: "Zambia",
        gallery:
              "https://cdn.pixabay.com/photo/2013/07/13/14/18/zambia-162464_960_720.png",
        capital: "Lusaka",
        population: 17351708,
        officialLanguage: "English",
        region: "Southern Africa",
        currency: "Kwacha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },);
    });

    it("updates country with specific id", done => {
      chai
        .request(server)
        .patch("/api/v1/admin/country/074019c3-2bc6-40e4-88e2-dd347ed74712")
        .set("content-type", "application/json").set("Authorization", `Bearer ${adminToken}`)
        .send({ population: 50000 })
        .end((err, res) => {
          const { status, body } = res;

          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully updated country");
          done();
        });
    });

    it("returns 404 when updating country which is not in db", done => {
      chai
        .request(server)
        .patch("/api/v1/admin/country/6003fb36").send({ population: 50000 }).set("Authorization", `Bearer ${adminToken}`)
        .end((err, res) => {
          const { status, body } = res;

          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("Resource not found.");
          done();
        });
    });
  });
});
