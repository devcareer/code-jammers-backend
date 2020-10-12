import bcrypt from "bcrypt";
import utils from "../../utilities/index";

const password = "1234";
const hash = bcrypt.hashSync(password, 10);
const { randomTokenGenerator } = utils;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [{
      id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      email: "francis@gmail.com",
      username: "iamfrancis",
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
      resetPasswordToken: randomTokenGenerator(),
      resetPasswordExpires: new Date(),
    },
    {
      id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      email: "donald@gmail.com",
      username: "obioflagos",
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
      resetPasswordToken: randomTokenGenerator(),
      resetPasswordExpires: new Date(), 
    },
    {
      id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      email: "godspower@gmail.com",
      username: "therealgodspower",
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
      resetPasswordToken: randomTokenGenerator(),
      resetPasswordExpires: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
