
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";


// assertion style

chai.should();

chai.use(chaiHttp);

describe("app.js should return all endpoints", async () => {
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