const client = require("../utilities/elasticsearchUtils/elasticsearchConnection");

client.ping({
  requestTimeout: 3,
}, error => {
  if (error) {
    console.log("Cannot connect to Elasticsearch.");
    console.error(error);
  } else {
    console.log("connected to Elasticsearch was successful!");
  }
});

client.cluster.health({}, (err, resp, status) => {
  console.log("-- Client Health", resp);
});

client.indices.delete({ index: "country" }, (err, resp, status) => { console.log("delete", resp); });
