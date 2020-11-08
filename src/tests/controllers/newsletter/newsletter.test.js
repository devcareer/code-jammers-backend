import chai from "chai";
import chaiHttp from "chai-http";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  newsletter2,
  newsletter1,
  subscriber4,
  subscriber3,
  subscriber2,
  subscriber1
} from "./newsletter-test-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

sendGrid.sandboxMode();

chai.should();

chai.use(chaiHttp);

describe("Create newsletter, create subscribers, enable subscribers to unsubscribe", () => {
  let adminToken;
  let userToken;
  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .set("Accept", "application/json")
      .send(user4)
      .end((err, res) => {
        if (err) throw err;
        adminToken = res.body.token;
        done();
      });
  });
  before(done => {
    chai
      .request(server)
      .post("/api/v1/users/signin")
      .set("Accept", "application/json")
      .send(user5)
      .end((err, res) => {
        if (err) throw err;
        userToken = res.body.token;
        done();
      });
  });
  it("it should create a subscriber with complete details successfully", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/subscribe")
      .set("Accept", "application/json")
      .send(subscriber1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Please verify that you own this email");
        done();
      });
  });
  it("it should verify a subscriber's account", done => {
    chai
      .request(server)
      .get(`/api/v1/subscriber/verify/${subscriber1.email}`)
      .end((err, res) => {
        if (err) return error;
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Yay!!! You just subscribed successfully");
        res.body.data.should.have.property("verified").eql(true);
        done();
      });
  });
  it("it should get all subscribers", done => {
    chai
      .request(server)
      .get("/api/v1/newsletter/subscribers")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Subscribers Retrieved");
        done();
      });
  });
  it("it should not create a subscriber with incomplete details successfully", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/subscribe")
      .set("Accept", "application/json")
      .send(subscriber2)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("it should not create a subscriber with an already registered email address", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/subscribe")
      .set("Accept", "application/json")
      .send(subscriber3)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      });
  });
  it("it should unsubscribe a subscriber with registered email", done => {
    chai
      .request(server)
      .get(`/api/v1/newsletter/unsubscribe/${subscriber4.email}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("You've unsubscribed from this newsletter");
        done();
      });
  });
  it("should allow user with admin role create a newsletter", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/admin/create_newsletter")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(newsletter1)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it("Should not allow admin create a newsltter with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/admin/create_newsletter")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(newsletter2)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("Should not allow user without token to create a newsletter", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/admin/create_newsletter")
      .send(newsletter1)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/newsletter/admin/create_newsletter")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(newsletter1)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
