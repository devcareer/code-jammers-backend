module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Music", [{
      countryId: 1,
      category: "Religious",
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599565560/music_cl7glf.jpg",
      event: "Chrismas carol",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Music", null, {});
  },
};
