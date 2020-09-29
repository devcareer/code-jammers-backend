module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformations", [{
      countryId: "2a7fe4a4-f6d3-4e99-a7ef-8098786073c2",
      about: "These are the security details.",
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
