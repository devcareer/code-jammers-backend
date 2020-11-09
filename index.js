const db = require("./src/models/index");

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
const countries = db.Countries.findAll({
  include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }]
});

console.log(countries);
