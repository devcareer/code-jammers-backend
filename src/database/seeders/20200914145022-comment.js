module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [{
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      comment: "I had a swell time visiting this city last year. Can't wait to visit with my family again.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
