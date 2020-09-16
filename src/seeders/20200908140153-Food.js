module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Music", [{
      countryId: "2a7fe4a4-f6d3-4e99-a7ef-8098786073c2",
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

