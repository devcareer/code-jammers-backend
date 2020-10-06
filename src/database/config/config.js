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
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
};