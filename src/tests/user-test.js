import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  user,
  user2
} from "../database/seeders/user-test-data";
=======
>>>>>>> 600939d... modified database/config.js
=======
>>>>>>> ea6a4c6... Enabled Json web token

// assertion style

chai.should();

chai.use(chaiHttp);

describe("Should test all users", async () => {
  describe("/api/v1/users/signup should create a user", () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    it("it should create a user with complete details successfully", done => {
=======
=======
>>>>>>> ea6a4c6... Enabled Json web token
    it("it should create a user with complete details successfully", (done) => {
=======
    it("it should create a user with complete details successfully", done => {
>>>>>>> ecd02d1... modify eslint
      const user = {
        username: "GarryT",
        email: "Garry@gmail.com",
        password: "123456"
      };
<<<<<<< HEAD
>>>>>>> 600939d... modified database/config.js
=======
>>>>>>> ea6a4c6... Enabled Json web token
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ea6a4c6... Enabled Json web token
      const user = {
        email: "Garry@gmail.com",
        password: "123456"
      };
<<<<<<< HEAD
>>>>>>> 600939d... modified database/config.js
=======
>>>>>>> ea6a4c6... Enabled Json web token
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
<<<<<<< HEAD
<<<<<<< HEAD
        .send(user2)
=======
        .send(user)
>>>>>>> 600939d... modified database/config.js
=======
        .send(user)
>>>>>>> ea6a4c6... Enabled Json web token
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
