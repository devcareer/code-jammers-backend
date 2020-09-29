import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import auth from "../../../middlewares/isAdmin";
import { country, payload } from "./addcountry-data";

let server;

chai.should();

const { expect } = chai;
chai.use(chaiHttp);

describe("Admin user can add country", () => {
  let isAdminStub;
  before(() => {
    isAdminStub = sinon.stub(auth, "isAdmin").callsFake((req, res, next) => {
      console.log("Stubbed");
      next();
    });
    server = require("../../../app");
  });

  it("should allow user with admin role add a country", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
      .send(payload, country)
      .end((err, res) => {
        expect(res).to.have.status(201);
        isAdminStub.restore();
        done();
      });
  });
});
