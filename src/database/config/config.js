require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: "postgres",
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  }
};
