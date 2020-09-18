module.exports = {
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformation", [{
      countryId: 1,
      location: "Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Securityinformation", null, {});
  },
=======
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Securityinformations", [{
			countryId: 1,
			location: "Nigeria",
			createdAt: new Date(),
			updatedAt: new Date(),
		}],
		{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Securityinformations", null, {});
	},
>>>>>>> f15c36c... rebase develop
};
