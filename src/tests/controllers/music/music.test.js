import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../../models/index";
import { user4, user5 } from "../users/user-sign-in-test-data";
import {
  music, music2, music3, music4, music5
} from "./music-data";
import server from "../../../app";
import sendGrid from "../../../utilities/sendgrid";

chai.should();
sendGrid.sandboxMode();

const { expect } = chai;
chai.use(chaiHttp);

describe("Add Music", () => {
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
  it("should allow user with admin role add Music", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(music)
      .end((err, res) => {
        console.log(err);
        console.log(res.body);
        expect(res).to.have.status(201);
        done();
      });
  });
  it("should not allow admin add the same Music category twice", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(music)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("should not allow admin add Music with incomplete details", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(music2)
      .end((err, res) => {
        console.log(res.body);

        expect(res).to.have.status(400);
        done();
      });
  });
  it("should not allow user without token add Music", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .send(music3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("should not allow user without admin role add Music", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/2e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${userToken}`)
      .set("Accept", "application/json")
      .send(music3)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
  it("should not allow admin add Music to a country not in db", done => {
    chai
      .request(server)
      .post("/api/v1/admin/music/9e11e4a9-441b-4426-9521-39adc64ccfad")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send(music3)
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("Update Music", () => {
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
  it("should allow Admin update Music", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/music/2a7fe4a4-f6d3-4e99-a7ef-8098786073c2")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ category: "Afrobeat" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully updated music.");
        done();
      });
  });
  it("should not allow admin update Music with invalid ID data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/music/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ category: "Afrobeat", gallery: "facebook.com" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("should not allow admin update Music with invalid countryId data type", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/music/2a7fe4a4-f6d3-4e99-a7ef-8098786073c2")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "2e11e4a" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("CountryId must be a UUID");
        done();
      });
  });
  it("returns 404 when updating Music which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/music/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ category: "Afrobeat" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Music not found");
        done();
      });
  });
  it("returns 404 when updating Music countryId which is not in db", done => {
    chai
      .request(server)
      .patch("/api/v1/admin/music/2a7fe4a4-f6d3-4e99-a7ef-8098786073c2")
      .set("Authorization", `Bearer ${adminToken}`)
      .set("Accept", "application/json")
      .send({ countryId: "ea26d3c7-4635-436f-ab2e-a463792301c9" })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Country does not exist");
        done();
      });
  });
});

describe("Delete Music", () => {
  beforeEach(async () => {
    await db.Music.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.Music.create(music4);
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
  it("should allow Admin Delete Music", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/music/ea26d3c7-4635-436f-ab2e-a463792301c9")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Successfully deleted music.");
        done();
      });
  });
  // validation tests
  it("should not allow admin delete Music with invalid ID data type", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/music/8d58")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("ID must be a UUID");
        done();
      });
  });
  it("returns 404 when deleting Music which is not in db", done => {
    chai
      .request(server)
      .delete("/api/v1/admin/music/8d585465-cd80-4030-b665-bdc3bbd3e578")
      .set("Authorization", `Bearer ${adminToken}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Music not found");
        done();
      });
  });
});

describe("GET Music api route", () => {
  beforeEach(async () => {
    await db.Music.destroy({
      where: {
      },
      trancate: {
        cascade: true,
      },
    });
    await db.Music.create(music4);
    await db.Music.create(music5);
  });
  it("returns all Musics ", done => {
    chai
      .request(server)
      .get("/api/v1/music")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived all music");
        data.forEach(items => {
          expect(items).to.have.property("id");
          expect(items).to.have.property("countryId");
          expect(items).to.have.property("gallery");
          expect(items).to.have.property("category");
        });
        expect(data).to.have.length(2);
        expect(data).to.be.an("array");
        done();
      });
  });

  it("returns Music with specific id", done => {
    chai
      .request(server)
      .get("/api/v1/music/1e09a076-52cb-4597-94f4-8f106a3db4d3")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(200);
        expect(body.status).to.equal(200);
        expect(body.message).to.equal("Successfully retrived music.");
        expect(data).to.have.property("id");
        expect(data).to.have.property("countryId");
        expect(data).to.have.property("gallery");
        expect(data).to.have.property("category");
        expect(data).to.be.an("object");
        done();
      });
  });
  it("returns 404 when trying to get Music with wrong id", done => {
    chai
      .request(server)
      .get("/api/v1/music/9e09a076-52cb-4597-94f4-8f106a3db4d3")
      .end((err, res) => {
        const { status, body } = res;
        const { data } = body;
        expect(status).to.equal(404);
        expect(body.status).to.equal(404);
        expect(body.error).to.equal("Music not found");
        done();
      });
  });
});
