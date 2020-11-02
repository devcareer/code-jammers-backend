import chai from "chai";
import chaiHttp from "chai-http";
import { user4, user5 } from "../users/user-sign-in-test-data";
import { state, state2, state3 } from "./addState-data";
import server from "../../../app";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add state", () => {
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
  it("should allow user with admin role add a state", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same state twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add a state with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(state2)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow user without token add a state", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state")
      .send(state3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a state", done => {
    chai
      .request(server)
      .post("/api/v1/admin/state")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(state3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});
