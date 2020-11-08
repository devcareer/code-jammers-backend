import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  state, state2, state3, state4, state5
} from "./state-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

chai.should();
sendGrid.sandboxMode();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add States", () => {
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
  it("should allow user with admin role add a State", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same State name twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add a State with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add a State", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .send(state3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a State", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(state3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});

describe("Update state", () => {
  beforeEach(async () => {
    await db.States.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.States.create(state4);
  });
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
  it("should allow Admin update a State", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/state/c72134f2-69e2-4a13-bb1c-e0d60d43afa3")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({
        countryId: "c72134f2-69e2-4a13-bb1c-e0d60d43afa3",
        name: "ikoyi",
        capital: "okoko",
        gallery: "https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG"
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated State");
        done();
      });
  });
});

describe("Delete State ", () => {
  beforeEach(async () => {
    await db.States.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.States.create(state4);
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
  it("should allow Admin Delete a State", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/state/c72134f2-69e2-4a13-bb1c-e0d60d43afa3")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully Deleted state");
        done();
      });
  });
  it("should not allow admin delete a state with invalid ID data type", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/state/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when deleting state which is not in db", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/state/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("State not found");
        done();
      });
  });
});

describe("GET state api route", () => {
  beforeEach(async () => {
    await db.States.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.States.create(state4);
    await db.States.create(state5);
  });
  it("returns all states ", done => {
    chai
      .request(server)
      .get("/api/v1/states")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived all States");

        data.forEach(states => {
          expect(states).to.have.property("countryId");
          expect(states).to.have.property("gallery");
          expect(states).to.have.property("name");
          expect(states).to.have.property("capital");
        });

        expect(data).to.have.length(2);

        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns state with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/state/c72134f2-69e2-4a13-bb1c-e0d60d43afa3")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived state");
        expect(data).to.have.property("id");
        expect(data).to.have.property("countryId");
        expect(data).to.have.property("gallery");
        expect(data).to.have.property("name");
        expect(data).to.have.property("capital");

        expect(data).to.be.an("object");
        done();
      });
  });
});
