module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Hisoricalfact", [{
      countryId: 1,
      location: "Nigeria",
      gallery: "https://netstorage-legit.akamaized.net/images/468ff81348dddbff.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hisoricalfact", null, {});
  },
};
