import chai from "chai";
import chaiHttp from "chai-http";
import { user6, user5 } from "../controllers/users/user-sign-in-test-data";
import commentMockData from "../__mock__/commentMockData";
import server from "../../app";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add comment", () => {
  let userToken; let
    ownerToken;
  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .send(user5)
      .end((err, res) => {
        if (err) throw err;
        userToken = res.body.token;
        done();
      });
  });

  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .send(user6)
      .end((err, res) => {
        if (err) throw err;
        ownerToken = res.body.token;
        done();
      });
  });

  it("should allow logged in user to add a comment", done => {
    chai
      .request(server)
      .post("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${userToken}`)
      .send(commentMockData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it("should not allow user to add an empty comment", done => {
    chai
      .request(server)
      .post("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ comment: "" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("comment cannot be an empty field.");
        done();
      });
  });

  it("should not allow user to add a comment that is less than 3 characters", done => {
    chai
      .request(server)
      .post("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ comment: "12" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("comment length must be at least 3 characters long");
        done();
      });
  });

  it("should not allow user that is not logged in to add a comment", done => {
    chai
      .request(server)
      .post("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Accept", "application/json")
      .send(commentMockData)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("Please login.");
        done();
      });
  });

  it("should not allow a user that is not logged in to get a comment", done => {
    chai.request(server)
      .get("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("Please login.");
        done();
      });
  });

  it("should  allow a user that is logged in to get a comment", done => {
    chai.request(server)
      .get("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02")
      .set("Authorization", `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully retrived comment");
        expect(res.body).to.have.property("data");
        done();
      });
  });

  it("should  return 404 error when user tries to get comment that is not in the database", done => {
    chai.request(server)
      .get("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d01")
      .set("Authorization", `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Resource not found.");
        done();
      });
  });

  it("should not allow a user that is not logged in to edit a comment", done => {
    chai.request(server)
      .patch("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02")
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("Please login.");
        done();
      });
  });

  it("should not allow a user to update a comment that is not in the database", done => {
    chai.request(server)
      .patch("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f").set("Authorization", `Bearer ${ownerToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Resource not found.");
        done();
      });
  });

  it("should not allow a user that is not owner of comment  to edit a comment", done => {
    chai.request(server)
      .patch("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02").set("Authorization", `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("You are not authorized to perform this action");
        done();
      });
  });

  it("should allow a user that is owner of comment to edit a comment", done => {
    chai.request(server)
      .patch("/api/v1/comment/c375c640-81ff-405a-89a8-460ea2f71756").set("Authorization", `Bearer ${ownerToken}`)
      .send({ comment: "I have been edited" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated comment");
        expect(res.body).to.have.property("data");
        done();
      });
  });

  it("should not allow a user to delete a comment that is not in the database", done => {
    chai.request(server)
      .delete("/api/v1/comment/6003fb36-5112-463e-a1f9-c8944e72412f").set("Authorization", `Bearer ${ownerToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Resource not found.");
        done();
      });
  });

  it("should not allow a user that is not logged in to delete a comment", done => {
    chai.request(server)
      .delete("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02")
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("Please login.");
        done();
      });
  });

  it("should not allow a user that is not owner of comment  to delete a comment", done => {
    chai.request(server)
      .delete("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02").set("Authorization", `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.equal("You are not authorized to perform this action.");
        done();
      });
  });
  it("should allow a user that is owner of comment  to delete a comment", done => {
    chai.request(server)
      .delete("/api/v1/comment/9ccff1f3-135f-41d9-adf2-b92c8ade4d02").set("Authorization", `Bearer ${ownerToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully deleted comment");
        done();
      });
  });
});
