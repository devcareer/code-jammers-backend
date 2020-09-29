module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Newsletters", [{
      id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f",
      email: "newuser@gmail.com",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85c",
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
