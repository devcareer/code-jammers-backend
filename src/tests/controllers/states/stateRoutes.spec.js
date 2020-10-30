import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import database from "../../../models";
import statesData from "./statesData";
import stateData from "./stateData";

chai.use(chaiHttp);
const { expect } = chai;

describe("States api routes", () => {
  beforeEach(async () => {
    // remove any rows from database before testing
    await database.States.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
  });

  describe("GET multiple states api route", () => {
    beforeEach(async () => {
      await database.States.create(stateData[0]);
      await database.States.create(stateData[1]);
    });
    it("returns all states ", done => {
      chai
        .request(server)
        .get("/api/v1/get-states")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;
          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived all states");

          // check that all entries have all required properties
          data.forEach(state => {
            expect(state).to.have.property("id");
            expect(state).to.have.property("name");
            expect(state).to.have.property("countryId");
            expect(state).to.have.property("gallery");
            expect(state).to.have.property("capital");
          });

          // check if all countries are recieved
          expect(data).to.have.length(2);

          // check that body is of the correct data type
          expect(data).to.be.an("array");
          done();
        });
    });
  });

  describe("GET state with specific name route", () => {
    beforeEach(async () => {
      await database.States.create(stateData);
    });

    it("returns state with specific name", done => {
      chai
        .request(server)
        .get("/api/v1/get-state?name=Lagos")
        .end((err, res) => {
          const { status, body } = res;
          const { data } = body;
          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully retrived Lagos state ");

          // check if all states are recieved
          // expect(data).to.have.length(2);

          // check that body is of the correct data type
          expect(data).to.be.an("object");
          done();
        });
    });

    it("returns state with all properties", done => {
      chai
        .request(server)
        .get("/api/v1/get-state?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { body } = res;
          const { data } = body;

          expect(data).to.have.property("id");
          expect(data).to.have.property("name");
          expect(data).to.have.property("countryId");
          expect(data).to.have.property("gallery");
          expect(data).to.have.property("capital");

          done();
        });
    });

    it("returns an error when name is not provided when updating a country", done => {
      chai
        .request(server)
        .delete("/api/v1/update-state?")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("id not provided please provide an id");
          done();
        });
    });

    it("returns state which matches Data", done => {
      chai
        .request(server)
        .get("/api/v1/get-state?id=6003fb36-5112-463e-a1f9-c8944e72412f")
        .end((err, res) => {
          const { body } = res;
          const { data } = body;

          expect(data.id).to.equal("1cb6271e-45d7-4545-907d-cdecf4a520f2");

          expect(data.name).to.equal("Lagos");

          expect(data.countryId).to.equal("6003fb36-5112-463e-a1f9-c8944e72412f");

          expect(data.gallery).to.equal("https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG");

          expect(data.capital).to.equal("Ikeja");
          done();
        });
    });
  });

  describe("DELETE state with specific name route", () => {
    beforeEach(async () => {
      await database.States.create(stateData);
    });

    it("deletes state with specific name", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-state?name=Lagos")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully Deleted Lagos state");
          done();
        });
    });

    it("returns 404 when deleting state which is not in db", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-state?name=Awka")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("Awka state does not exists in the database");
          done();
        });
    });

    it("returns an error when id is not provided when deleteing a state", done => {
      chai
        .request(server)
        .delete("/api/v1/delete-state?")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("State name not provided please provide a state name");
          done();
        });
    });
  });

  describe("UPDATE state with specific id route", () => {
    beforeEach(async () => {
      await database.States.create(stateData);
    });

    it("updates state with specific id", done => {
      chai
        .request(server)
        .put("/api/v1/update-state?id=Lagos")
        .set("content-type", "application/json")
        .send({ capital: Okokomaiko })
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(200);
          expect(body.status).to.equal(200);
          expect(body.message).to.equal("Successfully updated Lagos State");
          done();
        });
    });

    it("returns 404 when updating state which is not in database", done => {
      chai
        .request(server)
        .delete("/api/v1/update-state?id=newyork")
        .end((err, res) => {
          const { status, body } = res;

          // status should be 200
          expect(status).to.equal(404);
          expect(body.status).to.equal(404);
          expect(body.error).to.equal("sorry State does not exist in the database");
          done();
        });
    });

    it("returns an error when id is not provided when updating a state", done => {
      chai
        .request(server)
        .delete("/api/v1/update-state?")
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
