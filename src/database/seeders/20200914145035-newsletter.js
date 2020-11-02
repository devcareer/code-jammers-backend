module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Newsletters", [{
      id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f",
      title: "Welcome message",
      message: "Thank you for subscribing to Know Africa. We look forward to sharing the many beauties of Africa with you!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85c",
      title: "Africa Not a country",
      message: "Africa is home to over 1.5 billion humans with about 54 independent countries, forests, natural resources, game, music, rich culture, and women! Visiting any country in Africa would give you a deep awakening on how divers, unique and beautiful Africa is.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "866e1211-5b39-4cd4-9edf-865dd90bd360",
      title: "Africa is beautiful",
      message: "Visiting any of the 54 countries in Africa will definitely change your crude perspective that Africa is yet to catch up with civilization!",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Newsletters", null, {});
  },
};
