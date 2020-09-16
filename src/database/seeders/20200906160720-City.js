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

          countryId: "2e11e4a9-441b-4426-9521-39adc64ccfad",
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
