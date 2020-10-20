import bcrypt from "bcrypt";

const password = "12345";
const hash = bcrypt.hashSync(password, 10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [{
      id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      email: "francis@gmail.com",
      username: "iamfrancis",
      password: hash,
      verified: true,
      role: "Super Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      email: "ufuoma@gmail.com",
      username: "bellogo",
      password: hash,
      verified: true,
      role: "Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      email: "godspower@gmail.com",
      username: "therealgodspower",
      password: hash,
      verified: true,
      role: "User",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
