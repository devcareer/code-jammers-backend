import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import {
  user,
  user2,
  user3
} from "./user-sign-in-test-data";

// assertion style

chai.should();

chai.use(chaiHttp);

describe("Should test all users", async () => {
  describe("/api/v1/users/signin should sign in a user", () => {
    it("it should sign in a user with complete details successfully", done => {
      chai
        .request(server)
        .post("/api/v1/users/signin")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(200);
          res.body.should.have.property("message").eql("User Logged in!");
          done();
        });
    });
    it("it should not sign in a user with incomplete details", done => {
      chai
        .request(server)
        .post("/api/v1/users/signin")
        .set("Accept", "application/json")
        .send(user2)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("it should not sign in a user without a registered email", done => {
      chai
        .request(server)
        .post("/api/v1/users/signin")
        .set("Accept", "application/json")
        .send(user3)
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });
  });
});
