module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Profiles", [{
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Olusola",
      lastName: "Fullstack",
      profilePicture: "http:/facebook.com",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
