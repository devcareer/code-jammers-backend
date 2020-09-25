import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../app";
import country from "./addcountry-data";

chai.should();

chai.use(chaiHttp);

describe("Add a country", () => {
//   it("it should not add a country that already exists", done => {
//     const book = {
//       title: "The Lord of the Rings",
//       author: "J.R.R. Tolkien",
//       year: 1954
//     };
//     chai.request(server)
//       .post("/book")
//       .send(book)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");
//         res.body.should.have.property("errors");
//         res.body.errors.should.have.property("pages");
//         res.body.errors.pages.should.have.property("kind").eql("required");
//         done();
//       });
//   });
  it("it should add a country ", done => {
    chai
      .request(server)
      .post("/api/v1/admin/addcountry")
      .set("Accept", "application/json")
      .send(country)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("A country has been added.");
        res.body.should.have.property("status").eql("200");
        res.body.should.have.property("data");
        done();
      });
  });
});
