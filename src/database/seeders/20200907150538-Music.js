module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Food", [{
      countryId: "9e92fadd-8897-4d3d-b9de-cf82e9752a1f",
      types: "Jellof rice",
      methodOfPreparation: `MAKE THE SOUP:
                                         1 In a large pot, heat the palm oil on medium for a minute and then add the Une.
                                         2 Slowly add the stock and set on low heat to simmer.
                                         3 Scoop teaspoon size balls of the egusi paste mixture into the stock. Be sure to keep ball shape.
                                         4 Leave to simmer for 20 – 30 minutes so the balls cook through.
                                         5 Add the meat and fish and other bits which you’d like to use.
                                         6 Add cut-up pumpkin leaves. 
                                         6 Stir and put a lid on the pot and allow cook for 7–10 minutes, till the leaves wilt.
                                         7 Add the bitter leaf.  Leave the lid off while the cooking finishes for another 5-10 minutes.
                                         8 Stir, check seasoning and adjust accordingly.`,
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
