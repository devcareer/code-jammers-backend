module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Hisoricalfacts", [{
      countryId: 1,
      location: "Nigeria",
      gallery: "https://netstorage-legit.akamaized.net/images/468ff81348dddbff.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hisoricalfacts", null, {});
  },
};
