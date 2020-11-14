import chai from "chai";
import chaiHttp from "chai-http";
import { user4, user7 } from "../users/user-sign-in-test-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

sendGrid.sandboxMode();
chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Activate a user", () => {
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
      .send(user7)
      .end((err, res) => {
        if (err) throw err;
        userToken = res.body.token;
        done();
      });
  });
  it("should allow user with admin role activate a user", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/activate-user/fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("User activated successfully!");
        done();
      });
  });
  it("should not allow user without token activate a user", done => {
    chai
      .request(server)
      .patch("/api/v1/activate-user/fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25")
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it("should not allow user without admin role activate a user", done => {
    chai
      .request(server)
      .patch("/api/v1/activate-user/fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25")
      .set("Authorization", `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
