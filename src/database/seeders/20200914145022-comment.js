module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [{
      userId: "2a2b0d7a-9af1-4e98-a8cd-4bef2e55c7cb",
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: "6a95cc13-c3a7-4929-8b63-59612534f2e6",
      comment: "I had a swell time visiting this city last year. Can't wait to visit with my family again.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comment", null, {});
  },
};
