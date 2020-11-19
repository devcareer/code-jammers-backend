import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../app";
import { newUser, user } from "./google-mock-data";

chai.should();

chai.use(chaiHttp);

describe("Signin a user with google oauth", () => {
  it("it should signin a user with google oauth", done => {
    chai.request(server).get("/auth/google");
    done();
  });
  it("it should redirect a user to the callback URL", done => {
    chai.request(server).get("/auth/google/callback");
    done();
  });
  it("it should save new user", done => {
    chai.request(server).post("/api/v1/users/signup").send(newUser);
    done();
  });
  it("it should not signup a user with an already registered id", done => {
    chai
      .request(server)
      .post("/api/v1/users/signup")
      .send(user);
    done();
  });
});
