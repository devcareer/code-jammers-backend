module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Newsletters", [{
      email: "newuser@gmail.com",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
    },
    {
      email: "newuser@gmail.com",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Newsletter", null, {});
  },
};
