import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  historicalFact1, historicalFact2, historicalFact3, historicalFact4, historicalFact5
} from "./historicalFacts.data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

chai.should();
sendGrid.sandboxMode();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add Historical Fact", () => {
  let adminToken;
  let userToken;
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
  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .set("Accept", "application/json")
      .send(user5)
      .end((err, res) => {
        if (err) throw err;
        userToken = res.body.token;
        done();
      });
  });
  it("should allow user with admin role add Historical Facts", done => {
    chai
      .request(server)
      .post("/api/v1/admin/historicalFact/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(historicalFact1)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow user without token add Historical Fact", done => {
    chai
      .request(server)
      .post("/api/v1/admin/historicalFact/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .send(historicalFact3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add Historical Fact", done => {
    chai
      .request(server)
      .post("/api/v1/admin/historicalFact/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(historicalFact3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
  it("should allow user with admin role add Historical Fact", done => {
    chai
      .request(server)
      .post("/api/v1/admin/historicalFact/4e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(historicalFact1)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.equal("HistoricalFacts has been successfully added.");
        done();
      });
  });
});

describe("Update Historical Fact", () => {
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
  it("should not allow admin update Historical Fact with invalid ID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/historicalFact/5rfsgwt")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Abuja" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("should not allow admin update Historical Fact with invalid countryId data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/historicalFact/12adedc3-d529-4f67-9ee6-5b763d5010f4")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "5ge117ukfd" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("CountryId must be a UUID");
        done();
      });
  });
  it("returns 404 when updating Historical Fact which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/historicalFact/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Rivers" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Historical Fact not found");
        done();
      });
  });
});

describe("Delete Historical Fact", () => {
  beforeEach(async () => {
    await db.Historicalfacts.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.Historicalfacts.create(historicalFact4);
  });
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
  it("should allow Admin Delete Historical Fact", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/historicalFact/8d585465-cd80-4030-b665-bdc3bbd3e575")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully deleted Historical Fact.");
        done();
      });
  });
  it("should not allow admin delete Historical Fact with invalid ID data type", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/historicalFact/6hger43")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when deleting Historical Fact which is not in db", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/historicalFact/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Historical Fact not found");
        done();
      });
  });
});

describe("GET Historical Fact api route", () => {
  beforeEach(async () => {
    await db.Historicalfacts.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.Historicalfacts.create(historicalFact4);
    await db.Historicalfacts.create(historicalFact5);
  });
  it("returns all Historical Facts ", done => {
    chai
      .request(server)
      .get("/api/v1/historicalFact")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrieved all Historical Facts");

        data.forEach(historicalFacts => {
          expect(historicalFacts).to.have.property("id");
          expect(historicalFacts).to.have.property("countryId");
          expect(historicalFacts).to.have.property("gallery");
          expect(historicalFacts).to.have.property("location");
          expect(historicalFacts).to.have.property("about");
        });

        expect(data).to.have.length(2);

        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns Historical Facts with specific location", done => {
    chai
      .request(server)
      .get("/api/v1/historicalFact/byLocation/Nigeria")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrieved all Historical Facts.");
        data.forEach(historicalFactLocation => {
          expect(historicalFactLocation).to.have.property("id");
          expect(historicalFactLocation).to.have.property("countryId");
          expect(historicalFactLocation).to.have.property("gallery");
          expect(historicalFactLocation).to.have.property("location");
          expect(historicalFactLocation).to.have.property("about");
        });
        expect(data).to.have.length(1);

        expect(data).to.be.an("array");

        // expect(data).to.be.an("object");
        done();
      });
  });

  it("returns Historical Fact with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/historicalFact/8d585465-cd80-4030-b665-bdc3bbd3e400")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrieved Historical Fact.");
        expect(data).to.have.property("id");
        expect(data).to.have.property("countryId");
        expect(data).to.have.property("gallery");
        expect(data).to.have.property("location");
        expect(data).to.have.property("about");

        expect(data).to.be.an("object");
        done();
      });
  });
});
