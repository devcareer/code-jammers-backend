require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: 1234,
    database: "knowafrica",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: 1234,
    database: "knowafrica",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: 1234,
    database: "knowafrica",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
