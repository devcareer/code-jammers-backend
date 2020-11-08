import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import {
  user,
  user2,
  user3
} from "./user-test-data";
import sendGrid from "../../../utilities/sendgrid";

sendGrid.sandboxMode();
chai.should();
chai.use(chaiHttp);
describe("Should test all users", async () => {
  describe("/api/v1/users/signup should create a user", () => {
    it("it should create a user with complete details successfully", done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(201);
          res.body.should.have.property("message").eql("User created! An email has been sent to you to verify your account");
          done();
        });
    });
    it("it should verify a user's account", done => {
      chai
        .request(server)
        .get(`/api/v1/users/signup/verify/${user.email}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("message").eql("User Verified successfully!");
          res.body.data.should.have.property("verified").eql(true);
          done();
        });
    });
    it("it should not create a user with incomplete details", done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user2)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("it should not signup a user with an already registered email", done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user3)
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });
  });
});
