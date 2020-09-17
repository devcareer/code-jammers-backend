module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Profiles", [{
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
