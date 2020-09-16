import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";
import {
  user,
  user2
} from "../database/seeders/user-test-data";

// assertion style

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
          res.body.should.have.property("status").eql("success");
          res.body.should.have.property("message").eql("User created!");
          res.body.should.have.property("data");
          done();
        });
    });
    it("it should not create a user with incomplete details", () => {
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
  });
});
