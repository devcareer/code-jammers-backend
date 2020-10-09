require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    database: "postgres",
    password: "postgres",
    dialect: "postgres",
  },
  production: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    dialect: "postgres",
  }
};
