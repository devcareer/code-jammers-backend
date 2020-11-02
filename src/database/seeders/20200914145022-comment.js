module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [{
      id: "9ccff1f3-135f-41d9-adf2-b92c8ade4d02",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "c375c640-81ff-405a-89a8-460ea2f71756",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      comment: "I had a swell time visiting this city last year. Can't wait to visit with my family again.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
