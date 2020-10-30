import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import { profile } from "./profile-data";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Update user profile", () => {
  it("should update a user profile successfully", done => {
    chai
      .request(server)
      .patch("/api/v1/user-profile/98e0350f-ed09-46b0-83d7-8a135afeaf84")
      .send(profile)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("User profile updated");
        done();
      });
  });
  it("should not update a profile with invalid userID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/user-profile/98e035")
      .send(profile)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("should only Update profile names with a strings", done => {
    chai
      .request(server)
      .patch("/api/v1/user-profile/98e0350f-ed09-46b0-83d7-8a135afeaf84")
      .send({ firstName: 86767, lastName: 787878 })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("firstName must be a string. lastName must be a string");
        done();
      });
  });
  it("returns 404 when updating a user profile which not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/user-profile/98e0350f-ed09-46b0-83d7-8a135afeaf80")
      .send(profile)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("User not found");
        done();
      });
  });
});
