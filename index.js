const db = require("./src/models/index");
const client = require("./src/utilities/elasticsearchUtils/elasticsearchConnection");

const countriesAttributes = [
  "id",
  "nameOfCountry",
  "gallery",
  "capital",
  "population",
  "officialLanguage",
  "region",
  "currency",
];
let countryDetails;
db.Countries.findAll({
  attributes: countriesAttributes,
  include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }, { model: db.EthnicGroups, as: "ethnicGroups" }, { model: db.Music, as: "music" }, { model: db.Foods, as: "Food" }]
})
  .then(country => {
    countryDetails = country.map(count => count.dataValues);
    client.index({
      index: "country",
      id: countryDetails[0].id,
      type: "country",
      body: { ...countryDetails[0] },
    }, (err, resp, status) => {
      console.log(resp);
    });
  });

client.ping({
  requestTimeout: 3000,
}, error => {
  if (error) {
    console.log("cannot connect to elasticsearch.");
    console.error(error);
  }
});
client.cluster.health({}, (err, resp, status) => {
  console.log(resp);
});
