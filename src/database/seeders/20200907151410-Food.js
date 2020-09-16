module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Foods", [{
      countryId: "9e92fadd-8897-4d3d-b9de-cf82e9752a1f",
      type: "Egusi soup",
      methodOfPreparation: `Add melon, onion, water and fresh pepper in a blender. Blend the ingredients together until 
      it forms a paste.
      Add water, chicken, turkey, ponmo, yellow pepper, stock, smoked panla fish, crayfish, chopped pepper and palm oil 
      to a pot. Allow all the ingredients to boil for 15 minutes.
      Now scoop little bits of the egusi paste into the pot. Do not stir in the mixture, just cover the pot and allow it 
      to cook for 10 minutes.
      Next add the Ugu leaves and Uziza, mix together and allow to cook for 5 minutes. You will notice that the oil will 
      start to rise to the top, your Egusi Soup is now ready.
      Serve and enjoy with Eba, Semo, Pounded Yam or even Rice.`,
      gallery: "https://res.cloudinary.com/augustar/image/upload/v1599563547/pounded-yam_qfzcy7.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Foods", null, {});
  },
};
