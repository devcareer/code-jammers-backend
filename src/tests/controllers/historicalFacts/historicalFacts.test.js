import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  touristCenter, touristCenter2, touristCenter3, touristCenter4, touristCenter5
} from "../historicalFacts-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

chai.should();
sendGrid.sandboxMode();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add Historical Facts", () => {
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
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same Historical Facts twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add Historical Facts with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add Historical Facts", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .send(touristCenter3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add Historical Facts", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(touristCenter3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
  it("should allow user with admin role add Historical Facts", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/4e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("Update Historical Facts", () => {
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
  it("should allow Admin update Historical Facts", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/12adedc3-d529-4f67-9ee6-5b763d5010f4")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ name: "Aso rock" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated Tourist Center.");
        done();
      });
  });
  it("should not allow admin update Historical Facts with invalid ID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Abuja" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("should not allow admin update Historical Facts with invalid countryId data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/12adedc3-d529-4f67-9ee6-5b763d5010f4")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "2e11e4a" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("CountryId must be a UUID");
        done();
      });
  });
  it("returns 404 when updating Historical Facts which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Rivers" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Tourist Center not found");
        done();
      });
  });
  it("returns 400 when updating Historical Fact's countryId which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/12adedc3-d529-4f67-9ee6-5b763d5010f4")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "8d585465-cd80-4030-b665-bdc3bbd3e519" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Country does not exist");
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
    await db.Historicalfacts.create(touristCenter4);
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
      .delete("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e575")
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
      .delete("/api/v1/admin/tourist-center/8d58")
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
      .delete("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e578")
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
    await db.Historicalfacts.create(touristCenter4);
    await db.Historicalfacts.create(touristCenter5);
  });
  it("returns all Historical Facts ", done => {
    chai
      .request(server)
      .get("/api/v1/tourist-centers")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived all Historical Facts");

        data.forEach(touristCenters => {
          expect(touristCenters).to.have.property("id");
          expect(touristCenters).to.have.property("countryId");
          expect(touristCenters).to.have.property("gallery");
          expect(touristCenters).to.have.property("location");
          expect(touristCenters).to.have.property("about");
        });

        expect(data).to.have.length(2);

        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns Historical Fact with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e400")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived Historical Fact.");
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
