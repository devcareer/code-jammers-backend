module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musics", [{
      id: "2a7fe4a4-f6d3-4e99-a7ef-8098786073c2", 
      countryId: "6003fb36-5112-463e-a1f9-c8944e72412f",
      category: "Hip Hop",
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599565560/music_cl7glf.jpg",
      event: "Concert",

      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Musics", null, {});
  },
};
