module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Food", [{
      countryId: 1,
      types: "Jellof rice",
      methodOfPreparation: `Boiling the Meat or fresh fish along side stock fish, add the palm oil into so it can boil. 
                           Add the ponmo and the dried fish too. Add the blended the fresh pepper,tomato,onion into the 
                           boiling stock.`,
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599659318/nigerian-jollof-rice_trm7pp.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Food", null, {});
  },
};
