const client = require("./elasticsearchConnection");

client.indices.delete({ index: "country" }, (err, resp, status) => { console.log("delete", resp); });
