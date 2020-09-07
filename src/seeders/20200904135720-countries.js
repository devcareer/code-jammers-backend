"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          nameOfCountries: "Nigeria",
          gallery:
            "https://img.freepik.com/free-vector/nigeria-map-flag-national-emblem_2239-230.jpg?size=338&ext=jpg",
          capital: "FCT Abuja",
          population: 205,
          officialLanguage: "English",
          region: "West Africa",
          currency: "Naira",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
