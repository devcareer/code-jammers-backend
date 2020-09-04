"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    await queryInterface.bulkInsert(
      "Cultures",
      [
        {
          types: "Yoruba culture",
          countryId: 1,
          festivals: "Eyo festival",
          dressing: "Agbádá àti Fìlà from Iseyin",
          language: "Yoruba",
          gallery:
            "https://netstorage-legit.akamaized.net/images/468ff81348dddbff.jpg",
          tribe: "Nigeria",
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
    await queryInterface.bulkDelete("Cultures", null, {});
  },
};
