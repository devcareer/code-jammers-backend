module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TouristCenters", [{
          id: "12adedc3-d529-4f67-9ee6-5b763d5010f4",
          countryId: "2e11e4a9-441b-4426-9521-39adc64ccfad",
          location: "Livingstone",
          gallery:
            "https://cdn.pixabay.com/photo/2017/04/13/09/11/waterfall-2227010_960_720.jpg",
          about: "Victoria Falls  is a waterfall on the Zambezi River in southern Africa, which provides habitat for several unique species of plants and animals. It is located on the border between Zambia and Zimbabwe[1] and is considered to be one of the world's largest waterfalls due to its width of 1,708 metres",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],{}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TouristCenters", null, {});
  },
};
