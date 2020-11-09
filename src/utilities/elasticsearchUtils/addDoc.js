/* eslint-disable require-jsdoc */
import db from "../../models/index";

const client = require("./elasticsearchConnection");

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

export default class Check {
  static checkSome() {
    const countries = db.Countries.findAll({
      include: [{ model: db.TouristCenters, as: "touristCenters" }, { model: db.States, as: "states" }]
    });

    console.log(countries);
  }
}
