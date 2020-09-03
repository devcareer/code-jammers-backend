import fs from "fs";

import path from "path";

import Sequelize from "sequelize";

import configurations from "../database/config";

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../database/config/config.js`)[env];

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
    config,
=======

    config
>>>>>>> feature(tourist-city-models) - create models
  );
}
fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
<<<<<<< HEAD
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
=======
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,

      Sequelize.DataTypes
    );
>>>>>>> feature(tourist-city-models) - create models
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;

db.Sequelize = Sequelize;
module.exports = db;
