import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  ethnicGroup, ethnicGroup2, ethnicGroup3, ethnicGroup4
} from "./ethnicGroup-data";
import server from "../../../app";

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add Ethnic Group", () => {
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
  it("should allow user with admin role add an ethnic group", done => {
    chai
      .request(server)
      .post("/api/v1/admin/ethnic-group/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(ethnicGroup)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same Ethnic Group twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/ethnic-group/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(ethnicGroup)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add an Ethnic Group with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/ethnic-group/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(ethnicGroup2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add an Ethnic Group", done => {
    chai
      .request(server)
      .post("/api/v1/admin/ethnic-group/6003fb36-5112-463e-a1f9-c8944e72412f")
      .send(ethnicGroup2)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add an Ethnic Group", done => {
    chai
      .request(server)
      .post("/api/v1/admin/ethnic-group/6003fb36-5112-463e-a1f9-c8944e72412f")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(ethnicGroup2)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});

describe("Update Ethnic Group", () => {
  beforeEach(async () => {
    await db.EthnicGroups.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.EthnicGroups.create(ethnicGroup3);
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
  it("should allow Admin update an Ethnic Group", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/ethnic-group/09015644-4195-417f-8934-7cdc6e8519e2")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ name: "Tonga" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated.");
        done();
      });
  });
  it("should not allow admin update an Ethnic Group with invalid ID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/ethnic-group/19e2")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ name: "Tonga" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when updating an Ethnic Group which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/ethnic-group/16b35638-ef15-443f-b1c1-ac99707a72ff")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ name: "Tonga" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Ethnic Group not found");
        done();
      });
  });
});

describe("Delete Ethnic Group", () => {
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
  it("should allow Admin Delete an Ethnic Group", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/ethnic-group/09015644-4195-417f-8934-7cdc6e8519e2")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully deleted!");
        done();
      });
  });
  it("should not allow admin delete an Ethnic Group with invalid ID data type", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/ethnic-group/16b3")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when deleting an Ethnic Group not in db", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/ethnic-group/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Ethnic Group not found");
        done();
      });
  });
});

describe("GET ethnic group api route", () => {
  beforeEach(async () => {
    await db.EthnicGroups.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.EthnicGroups.create(ethnicGroup3);
    await db.EthnicGroups.create(ethnicGroup4);
  });
  it("returns all ethnic groups ", done => {
    chai
      .request(server)
      .get("/api/v1/ethnic-groups")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);

        data.forEach(ethnicGroups => {
          expect(ethnicGroups).to.have.property("id");
          expect(ethnicGroups).to.have.property("countryId");
          expect(ethnicGroups).to.have.property("festivals");
          expect(ethnicGroups).to.have.property("name");
          expect(ethnicGroups).to.have.property("dressing");
          expect(ethnicGroups).to.have.property("language");
          expect(ethnicGroups).to.have.property("gallery");
          expect(ethnicGroups).to.have.property("culturalPractices");
        });
        expect(data).to.have.length(2);
        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns ethnic group with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/ethnic-group/63995ef8-351f-4035-a268-c6cd7697f0ef")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(data).to.be.an("object");
        done();
      });
  });
});
