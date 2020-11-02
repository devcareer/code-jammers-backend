import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  touristCenter, touristCenter2, touristCenter3, touristCenter4, touristCenter5
} from "./touristCenter-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

chai.should();
sendGrid.sandboxMode();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add Tourist Centers", () => {
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
  it("should allow user with admin role add a Tourist Center", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same Tourist Center name twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add a Tourist Center with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add a Tourist Center", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .send(touristCenter3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add a Tourist Center", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(touristCenter3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
  it("should allow user with admin role add a Tourist Center", done => {
    chai
      .request(server)
      .post("/api/v1/admin/tourist-center/4e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(touristCenter)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("Update Tourist Center", () => {
  beforeEach(async () => {
    // remove any rows from database before testing
    await db.TouristCenters.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.TouristCenters.create(touristCenter4);
  });
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
  it("should allow Admin update a Tourist Center", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e575")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ name: "Aso rock" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated Tourist Center.");
        done();
      });
  });
  // validation tests
  it("should not allow admin update a Tourist Center with invalid ID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Abuja" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("should not allow admin update a Tourist Center with invalid countryId data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e575")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "2e11e4a" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("CountryId must be a UUID");
        done();
      });
  });
  it("returns 404 when updating tourist center which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ location: "Rivers" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Tourist Center not found");
        done();
      });
  });
  it("returns 400 when updating a tourist center's countryId which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e575")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "8d585465-cd80-4030-b665-bdc3bbd3e519" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Country does not exist");
        done();
      });
  });
});

describe("Delete Tourist Center", () => {
  beforeEach(async () => {
    // remove any rows from database before testing
    await db.TouristCenters.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.TouristCenters.create(touristCenter4);
  });
  let adminToken;
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
  it("should allow Admin Delete a Tourist Center", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e575")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully deleted Tourist Center.");
        done();
      });
  });
  // validation tests
  it("should not allow admin delete a Tourist Center with invalid ID data type", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/tourist-center/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when deleting tourist center which is not in db", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Tourist Center not found");
        done();
      });
  });
});

describe("GET tourist center api route", () => {
  beforeEach(async () => {
    await db.TouristCenters.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.TouristCenters.create(touristCenter4);
    await db.TouristCenters.create(touristCenter5);
  });
  it("returns all tourist centers ", done => {
    chai
      .request(server)
      .get("/api/v1/tourist-centers")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        // status should be 200
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived all Tourist Centers");

        // check that all entries have all required properties
        data.forEach(touristCenters => {
          expect(touristCenters).to.have.property("id");
          expect(touristCenters).to.have.property("countryId");
          expect(touristCenters).to.have.property("gallery");
          expect(touristCenters).to.have.property("name");
          expect(touristCenters).to.have.property("location");
          expect(touristCenters).to.have.property("about");
        });

        // check if all countries are recieved
        expect(data).to.have.length(2);

        // check that body is of the correct data type
        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns tourist center with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/tourist-center/8d585465-cd80-4030-b665-bdc3bbd3e400")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        // status should be 200
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived Tourist Center.");
        expect(data).to.have.property("id");
        expect(data).to.have.property("countryId");
        expect(data).to.have.property("gallery");
        expect(data).to.have.property("name");
        expect(data).to.have.property("location");
        expect(data).to.have.property("about");

        // check that body is of the correct data type
        expect(data).to.be.an("object");
        done();
      });
  });
});
