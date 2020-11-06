import chai from "chai";
import chaiHttp from "chai-http";
import { user4, user5 } from "../users/user-sign-in-test-data";
import server from "../../../app";
import {
  food,
  food2,
  food3,
<<<<<<< HEAD
=======
  country,
  country2
>>>>>>> 498d4cd... Rebase develop
} from "./food.data";

chai.should();

chai.use(chaiHttp);

describe("Create Food, Get Food By Country, Get Single Food By Id, Get All Foods, Update Food By Id, Delete Food By Id ", () => {
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
  it("Should not allow a User without Admin role create a Food", done => {
    chai
      .request(server)
      .post("/api/v1/admin/food")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(food)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
  it("Should not allow a User without token create a Food", done => {
    chai
      .request(server)
      .post("/api/v1/admin/food")
      .set("Accept", "application/json")
      .send(food)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  it("Should not create a Food where country does not exist", done => {
    chai
      .request(server)
      .post("/api/v1/admin/food")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food2)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("error").eql("Country Not Found");
        done();
      });
  });
  it("Should allow User with Admin role create a Food", done => {
    chai
      .request(server)
      .post("/api/v1/admin/food")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Food created!");
        done();
      });
  });
  it("Should get all foods of a country", done => {
    chai
      .request(server)
<<<<<<< HEAD
      .get("/api/v1/food/country-foods/nigeria")
      .end((err, res) => {
=======
      .get("/api/v1/food/country-foods")
      .send(country)
      .end((err, res) => {
        console.log(err);
>>>>>>> 498d4cd... Rebase develop
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Country's Foods retrieved");
        done();
      });
  });
  it("Should not get all foods of a country that does not exixt", done => {
    chai
      .request(server)
<<<<<<< HEAD
      .get("/api/v1/food/country-foods/Central African Republic")
      .end((err, res) => {
=======
      .get("/api/v1/food/country-foods")
      .send(country2)
      .end((err, res) => {
        console.log(err);
>>>>>>> 498d4cd... Rebase develop
        res.should.have.status(404);
        res.body.should.have.property("error").eql("Country does not exist");
        done();
      });
  });
  it("Should get all created foods", done => {
    chai
      .request(server)
      .get("/api/v1/food/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("All foods retrieved successfully");
        done();
      });
  });
  it("Should not get food with invalid Id", done => {
    chai
      .request(server)
      .get("/api/v1/food/9e92fadd-8897-4d3d-b9de-cf82e9752a")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("Should not get non-existent food", done => {
    chai
      .request(server)
      .get("/api/v1/food/9e92fadd-8897-4d3d-b9de-cf82e9752a4e")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("Should get one food with valid Id", done => {
    chai
      .request(server)
      .get("/api/v1/food/9e92fadd-8897-4d3d-b9de-cf82e9752a1f")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Food found!");
        done();
      });
  });
  it("Should not allow a User without Admin role update a food", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(food3)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
  it("Should not allow a User with Admin role update a food with invalid Id", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food3)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("Should not allow a User with Admin role update a non-existent food", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/food/9e92fadd-8897-4ded-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food3)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("error").eql("Food not found");
        done();
      });
  });
  it("Should allow a User with Admin role to update a food", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food3)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Food updated successfully");
        done();
      });
  });
  it("Should not allow a User without Admin role delete a food", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
  it("Should not allow a User with Admin role delete a food with invalid Id", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("Should not allow a User with Admin role update a non-existent food", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/food/9e92fadd-8897-4ded-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("error").eql("Food not found");
        done();
      });
  });
  it("Should allow a User with Admin role to delete a food with valid Id", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/food/9e92fadd-8897-4d3d-b9de-cf82e9752a1f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(food3)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Food deleted successfully");
        done();
      });
  });
});
