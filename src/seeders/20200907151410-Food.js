module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Music", [{
      countryId: 2,
      category: "Hip Hop",
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599565560/music_cl7glf.jpg",
      event: "Concert",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Music", null, {});
  },
};
