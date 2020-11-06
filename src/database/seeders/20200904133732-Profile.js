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
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
