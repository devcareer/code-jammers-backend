module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await queryInterface.bulkInsert("Historicalfact", [{
=======
    await queryInterface.bulkInsert("Hisoricalfact", [{
>>>>>>> 825ba26... rebase develop
=======
    await queryInterface.bulkInsert("Historicalfact", [{
>>>>>>> 3015f14... rebase develop
=======
    await queryInterface.bulkInsert("Hisoricalfact", [{
>>>>>>> 4b198e7... fix database config
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
<<<<<<< HEAD
<<<<<<< HEAD
    await queryInterface.bulkDelete("Historicalfact", null, {});
=======
    await queryInterface.bulkDelete("Hisoricalfacts", null, {});
>>>>>>> 825ba26... rebase develop
=======
    await queryInterface.bulkDelete("Historicalfact", null, {});
>>>>>>> 3015f14... rebase develop
=======
    await queryInterface.bulkDelete("Hisoricalfact", null, {});
>>>>>>> 4b198e7... fix database config
  },
};
