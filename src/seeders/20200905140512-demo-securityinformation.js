module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformation", [{
=======
=======
>>>>>>> 673fb64... rebase develop
=======
>>>>>>> 2aaae8d... rebase develop
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
<<<<<<< HEAD
  },
<<<<<<< HEAD
>>>>>>> 3bd88a8... lint code
=======
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
>>>>>>> 080040d... feat(models): Design historical & security models
>>>>>>> 673fb64... rebase develop
=======
  }
>>>>>>> 2aaae8d... rebase develop
};
