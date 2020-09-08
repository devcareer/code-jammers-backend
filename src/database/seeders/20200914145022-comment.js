module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [{
      id: "9ccff1f3-135f-41d9-adf2-b92c8ade4d02",
      userId: "873c2726-877b-484c-8463-6299b8dc8ab1",
      comment: "Never knew Africa was not a country. Wow, thanks.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "c375c640-81ff-405a-89a8-460ea2f71756",
      userId: "1b841d51-008a-43e0-ad17-d419b6ae6b00",
      comment: "I had a swell time visiting this city last year. Can't wait to visit with my family again.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};