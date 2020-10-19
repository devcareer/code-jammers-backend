import chai from "chai";
import chaiHttp from "chai-http";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  country, country2, country3
} from "./addcountry-data";
import server from "../../../app";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add country", () => {
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
  it("should allow user with admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/country")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(country)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same country twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/country")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(country)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add a country with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/country")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(country2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/country")
      .send(country3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/country")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(country3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});
