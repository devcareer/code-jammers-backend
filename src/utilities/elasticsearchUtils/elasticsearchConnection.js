const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: ["http://localhost:9200"]
});

module.exports = client;
