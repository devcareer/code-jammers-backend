import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
// import auth from "../../../middlewares/isAdmin";
import { country, payload } from "./addcountry-data";
// import server from "../../../app";
let server;
let auth;
chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Admin user can add country", () => {
  beforeEach(() => {
    auth = require("../../../middlewares/isAdmin");
    sinon.stub(auth, "isAdmin").callsFake((req, res, next) => {
      console.log("Stubbed");
      return next();
    });
    server = require("../../../app");
  });

  afterEach(() => {
    auth.isAdmin.restore();
  });

  it("should allow user with admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
      .send(country)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
