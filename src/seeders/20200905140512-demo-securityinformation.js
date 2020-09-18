module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
    await queryInterface.bulkInsert("Securityinformations", [{
>>>>>>> 3bd88a8... lint code
=======
    await queryInterface.bulkInsert("Securityinformation", [{
>>>>>>> 020be84... rebase develop
=======
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Securityinformations", [{
>>>>>>> 86cdcdb... lint code
      countryId: 1,
      location: "Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    {});
  },
<<<<<<< HEAD
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
<<<<<<< HEAD
    await queryInterface.bulkDelete("Securityinformations", null, {});
<<<<<<< HEAD
  },
<<<<<<< HEAD
>>>>>>> 3bd88a8... lint code
=======
=======
=======
>>>>>>> 060c3e6... resolve conflict
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
<<<<<<< HEAD
>>>>>>> 080040d... feat(models): Design historical & security models
>>>>>>> 673fb64... rebase develop
=======
  }
>>>>>>> 2aaae8d... rebase develop
=======
    await queryInterface.bulkDelete("Securityinformation", null, {});
  },
>>>>>>> 020be84... rebase develop
=======
>>>>>>> 060c3e6... resolve conflict
=======

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Securityinformations", null, {});
  },
>>>>>>> 86cdcdb... lint code
};
