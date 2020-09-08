module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformation", [{
      countryId: 1,
      location: "Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Securityinformation", null, {});
  },
};
