module.exports = {
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
};
