import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: "postgres",
    password: process.env.DB_PASS,
    database: "user",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: process.env.DB_PASS,
    database: "user_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
