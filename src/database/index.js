require("dotenv").config();

// module.exports = {
//   development: {
//     url: process.env.DEV_DATABASE_URL,
//     dialect: "postgres",
//   },
//   test: {
//     url: process.env.TEST_DATABASE_URL,
//     dialect: "postgres",
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: "postgres",
//   },
// };

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: "host.docker.internal",
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: "host.docker.internal",
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  }
};