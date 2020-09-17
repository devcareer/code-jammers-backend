module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comment", [{
      userId: 4,
      countryId: 45,
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comment", null, {});
  },
};
