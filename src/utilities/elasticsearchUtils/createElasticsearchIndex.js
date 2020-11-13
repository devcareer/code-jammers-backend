const client = require("./elasticsearchConnection");

client.indices.create({
  index: "country"
}, (err, resp, status) => {
  if (err) {
    console.log(err);
  } else {
    console.log("create", resp);
  }
});
