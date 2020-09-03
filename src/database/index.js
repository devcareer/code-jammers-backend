import dotenv from "dotenv";

dotenv.config();

module.exports = {
	development: {
		username: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: "postgres",
	},
	test: {
		username: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: "postgres",
	},
	production: {
		username: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: "postgres",
	},
};
