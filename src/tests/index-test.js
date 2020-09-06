import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";
import profile from "../models/profile";

// assertion style

chai.should();

chai.use(chaiHttp);

describe("app.js should return all endpoints", async () => {
<<<<<<< HEAD
  describe("/ should display Welcome to Know Africa", () => {
    it("it should get the welcome page", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
=======
	describe("/ should display Welcome to Know Africa", () => {
		it("it should get the welcome page", (done) => {
			chai
				.request(server)
				.get("/")
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});
});

export default describe;
>>>>>>> 080040d... feat(models): Design historical & security models
