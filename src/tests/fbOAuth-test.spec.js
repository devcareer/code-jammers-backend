import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";

chai.should();

chai.use(chaiHttp);

describe("Signin a user with facebook oauth", () => {
  it("it should signin a user with facebook oauth", done => {
    chai.request(server).get("/auth/facebook/callback");
    done();
  });
  it("it should not sign up a user with an already existing email", done => {
    chai.request(server).get("/auth/facebook/callback")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
