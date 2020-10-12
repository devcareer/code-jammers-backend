import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import db from "../../../models";
import {
  user, notUser, newPassword, signed
} from "./reset-test-data";

chai.should();

chai.use(chaiHttp);

db.Users.create(user);

describe("Should test reset password", async () => {
  describe("/api/v1/users/reset-request should send recover email", () => {
    it("it should fail to send a recovery email", done => {
      chai
        .request(server)
        .post("/reset-request")
        .set("Accept", "application/json")
        .send(notUser)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property("error").eql(`The email address ${notUser.email} is not associated with any account.`);
          done();
        });
    });
    it("it should send a recovery email successfully", done => {
      chai
        .request(server)
        .post("/reset-request")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("message").eql("A reset email has been sent");
          done();
        });
    });
    it("it should change the password successfully", done => {
      chai
        .request(server)
        .post(`/reset-password/${user.id}/${signed}`)
        .set("Accept", "application/json")
        .send(newPassword)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("success").eql("password has been reset");
          done();
        });
    });
  });
});
