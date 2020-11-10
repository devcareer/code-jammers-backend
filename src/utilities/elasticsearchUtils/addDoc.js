const db = require("../../models/index");

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
db.Countries.findAll({
  attributes: countriesAttributes,
  include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }, { model: db.EthnicGroups, as: "ethnicGroups" }, { model: db.Music, as: "music" }, { model: db.Foods, as: "Food" }]
})
  .then(country => {
    const countryDetails = country.map(count => count.dataValues);
    console.log(countryDetails);
  });
