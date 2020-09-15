module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",

      [
        {
          name: "Lusaka",

          location: "Zambia",

          gallary:
            "https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
