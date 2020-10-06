const
  request = require("supertest-as-promised"); // npm i --save-dev supertest-as-promised
const app = require("../app");

const token = "some token here";

describe("App", () => {
  describe("Posts", () => {
    it("should pass auth check and get posts", () => request(app)
      .get("/posts")
      .set("Authorization", `Bearer ${token}`)
      .expect(200));
  });
});
