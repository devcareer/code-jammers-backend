module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TouristCenters",

      [
        {
          name: "Victorial Falls",

          location: "Livingstone",

          gallary:
            "https://cdn.pixabay.com/photo/2017/04/13/09/11/waterfall-2227010_960_720.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TouristCenters", null, {});
  },
};
