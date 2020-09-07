module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.bulkInsert("Securityinformation", [{
=======
    await queryInterface.bulkInsert("Securityinformations", [{
>>>>>>> lint code
      countryId: 1,
      location: "Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Securityinformations", null, {});
  },
};
