import chai from "chai";
import chaiHttp from "chai-http";
import {
  country, country2, country3, adminToken, userToken
} from "./addcountry-data";
import server from "../../../app";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add country", () => {
  it("should allow user with admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
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
      .post("/api/v1/admin/addcountry")
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
      .post("/api/v1/admin/addcountry")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(country2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without login auth add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
      .send(country3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(country3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});
