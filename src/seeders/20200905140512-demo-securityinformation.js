module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformation", [{
=======
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformations", [{
>>>>>>> 3bd88a8... lint code
      countryId: 1,
      location: "Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
<<<<<<< HEAD

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
=======

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Securityinformations", null, {});
  },
>>>>>>> 3bd88a8... lint code
};
