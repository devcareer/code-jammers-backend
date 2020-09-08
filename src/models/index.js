<<<<<<< HEAD
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
=======
import fs from "fs";

import path from "path";

import Sequelize from "sequelize";

import configurations from "../database";
>>>>>>> 4dcc6e2... feature(tourist-city-models) - create city and tourist center models

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

const config = require(`${__dirname}/../database/config/config.js`)[env];
const db = {};
let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
  sequelize = new Sequelize(process.env[config.url], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
<<<<<<< HEAD
=======

>>>>>>> 4dcc6e2... feature(tourist-city-models) - create city and tourist center models
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
<<<<<<< HEAD
    const model = sequelize.import(path.join(__dirname, file));
=======
    const model = require(path.join(__dirname, file))(
      sequelize,

      Sequelize.DataTypes
    );

>>>>>>> 4dcc6e2... feature(tourist-city-models) - create city and tourist center models
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
