module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "City",

      [
        {
          name: "Lusaka",

          location: "Zambia",

          gallary:
            "https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG",
        },
      ],

      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("City", null, {});
  },
};
