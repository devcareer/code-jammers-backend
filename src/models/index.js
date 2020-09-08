const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 38ac9f8... feature(tourist-city-models) - create city and tourist center models
const Sequelize = require("sequelize");
=======
import Sequelize from "sequelize";

import configurations from "../database";
>>>>>>> feature(tourist-city-models) - create city and tourist center models

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
    config
=======

    config,
>>>>>>> 73f9a81... feature(tourist-city-models) - create city and tourist center models
  );
}
fs.readdirSync(__dirname)
  .filter(
    (file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
  .forEach((file) => {
<<<<<<< HEAD
    const model = sequelize.import(path.join(__dirname, file));
=======
    const model = require(path.join(__dirname, file))(
      sequelize,

      Sequelize.DataTypes,
    );

>>>>>>> 73f9a81... feature(tourist-city-models) - create city and tourist center models
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
