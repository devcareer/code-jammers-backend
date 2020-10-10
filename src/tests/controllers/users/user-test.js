import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import {
  user,
  user2,
  user3,
  user4,
  decoder, newRole
} from "./user-test-data";

chai.should();

chai.use(chaiHttp);

describe("Should test all users", async () => {
  describe("/api/v1/users/signup should create a user", () => {
    before(done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user4)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
    let userId;
    it("it should create a user with complete details successfully", done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          userId = decoder(res.body.token);
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(201);
          res.body.should.have.property("message").eql("User created!");
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
    it("it should update a user's role", done => {
      const route = `/api/v1/users/${userId}/makeAdmin`;
      chai
        .request(server)
        .put(route)
        .set("Accept", "application/json")
        .send(newRole)
        .end((err, res) => {
          if (err) return err;
          res.should.have.status(200);
          done();
        });
    });
  });
});
