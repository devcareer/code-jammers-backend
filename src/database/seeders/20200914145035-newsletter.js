module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Newsletters", [{
      email: "newuser@gmail.com",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: "seconduser@gmail.com",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Newsletters", null, {});
  },
};
