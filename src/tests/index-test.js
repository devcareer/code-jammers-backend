import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";

// assertion style

chai.should();

chai.use(chaiHttp);

describe("app.js should return all endpoints", async () => {
  describe("/ should display Welcome to Know Africa", () => {
    it("it should get the welcome page", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("/api/v1/users/signup should create a user", () => {
    it("it should create a user with complete details successfully", done => {
      const user = {
        username: "GarryT",
        email: "Garry@gmail.com",
        password: "123456"
      };
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
      const user = {
        email: "Garry@gmail.com",
        password: "123456"
      };
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
