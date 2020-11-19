module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [{
      id: "9ccff1f3-135f-41d9-adf2-b92c8ade4d02",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      relatedId: "6003fb36-5112-463e-a1f9-c8944e72412f",
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "c375c640-81ff-405a-89a8-460ea2f71756",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      comment: "Nigeria is a beautiful Country.",
      relatedId: "6003fb36-5112-463e-a1f9-c8944e72412f",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
