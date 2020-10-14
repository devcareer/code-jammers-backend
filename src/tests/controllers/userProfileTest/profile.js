import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import {
  user,
  updateProfile
} from "./profile-data";
// assertion style
chai.should();
chai.use(chaiHttp);
describe("Should test all users", async () => {
  let userId;
  describe("/api/v1/users/signup should create a user and update the user's profile", () => {
    beforeEach(done => {
      chai
        .request(server)
        .post("/api/v1/users/signup")
        .set("Accept", "application/json")
        .send(user)
        .end((err, res) => {
          if (err) throw err;
          userId = res.body.data.id;
          done();
        });
    });
    it("it should update a userProfile with profile details", done => {
      console.log(`userId: ${userId}`);
      chai
        .request(server)
        .put(`/api/v1/users/${userId}/edit`)
        .set("Accept", "application/json")
        .send(updateProfile)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("User profile updated");
          res.body.should.have.property("data");
          done();
        });
    });
  });
});
