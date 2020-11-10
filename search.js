const db = require("./src/models/index");
const client = require("./src/utilities/elasticsearchUtils/elasticsearchConnection");

client.indices.search({
  index: "country",
  type: "country",
}, (error, response) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Mapping:\n", response.country.mappings.country.properties);
  }
});
