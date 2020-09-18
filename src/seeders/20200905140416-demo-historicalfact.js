module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.bulkInsert("Historicalfact", [{
=======
    await queryInterface.bulkInsert("Hisoricalfact", [{
>>>>>>> 825ba26... rebase develop
      countryId: 1,
      location: "Nigeria",
      gallery: "https://netstorage-legit.akamaized.net/images/468ff81348dddbff.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.bulkDelete("Historicalfact", null, {});
=======
    await queryInterface.bulkDelete("Hisoricalfacts", null, {});
>>>>>>> 825ba26... rebase develop
  },
};
