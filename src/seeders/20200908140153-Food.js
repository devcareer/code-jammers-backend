module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Food", [{
      countryId: 1,
      types: "Egusi Soup",
      methodOfPreparation: `Boiling the Meat or fresh fish along side stock fish, add the palm oil into so it can boil. 
                           Add the ponmo and the dried fish too. Add the blended the fresh pepper,tomato,onion into the 
                           boiling stock.`,
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599563547/pounded-yam_qfzcy7.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Food", null, {});
  },
};
