module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Subscribers", [{
      id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9a",
      firstName: "Donald",
      email: "donald@gmail.com",
      verified: true,
      newsletter: [
        "Welcome to Know Africa",
        " Africa Not a country",
        " Africa is beautiful",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "d3efec7e-480f-4cb3-b6d2-bed800b8989b",
      firstName: "Garry",
      email: "garry@gmail.com",
      verified: true,
      newsletter: [
        "Welcome message",
        " Africa is beautiful",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Subscribers", null, {});
  },
};
