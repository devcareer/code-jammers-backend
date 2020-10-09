require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
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
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  }
};
