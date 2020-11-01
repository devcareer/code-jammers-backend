module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "States",

      [
        {
          countryId: "2e11e4a9-441b-4426-9521-39adc64ccfad",
          name: "Lusaka",
          capital: "Lusaka",
          gallery:"https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lagos",
          countryId: "6003fb36-5112-463e-a1f9-c8944e72412f",
          capital: "ikeja",
          gallery: "https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      {
          name: "Anambra",
          countryId: "6003fb36-5112-463e-a1f9-c8944e72412f",
          capital: "Awka",
          gallery: "https://en.wikipedia.org/wiki/Lusaka#/media/File:Downtown_Lusaka.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
      }
      ],

      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("States", null, {});
  },
};
