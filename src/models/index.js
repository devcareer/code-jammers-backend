/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f15c36c... rebase develop

const config = require(`${__dirname}/../config/config.js`)[env];
=======
const config = require(`${__dirname}/../database/config.js`)[env];
>>>>>>> a305340... fix database config
=======

const config = require(`${__dirname}/../config/config.js`)[env];
=======
const config = require(`${__dirname}/../config/config.json`)[env];
>>>>>>> 080040d... feat(models): Design historical & security models
>>>>>>> 673fb64... rebase develop
=======

const config = require(`${__dirname}/../database/config.js`)[env];

>>>>>>> 825ba26... rebase develop
const db = {};
>>>>>>> dff23cc... rebase develop

const config = require(`${__dirname}/../database/config/config.js`)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {

  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}
fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
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
