module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83db9f1... test migration and seeders locally
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Securityinformation", {
=======
=======
>>>>>>> 673fb64... rebase develop
=======
>>>>>>> 2aaae8d... rebase develop
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Securityinformations", {
>>>>>>> 3bd88a8... lint code
=======
    await queryInterface.createTable("Securityinformation", {
>>>>>>> 020be84... rebase develop
=======
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Securityinformations", {
>>>>>>> 86cdcdb... lint code
=======
    await queryInterface.createTable("Securityinformation", {
>>>>>>> 92567b9... install sinon, remove plural tables
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
<<<<<<< HEAD
<<<<<<< HEAD
      // countryId: {
      //   type: Sequelize.INTEGER,
      // },
      location: {
        type: Sequelize.STRING,
      },
<<<<<<< HEAD
      // countryId: {
<<<<<<< HEAD
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: false,
      //   references: {
      //     model: "Country",
      //     key: "id",
      //   },
=======
=======
      countryId: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,
      },
      // countryId: {
>>>>>>> 86cdcdb... lint code
      // 	type: Sequelize.INTEGER,
      // 	onDelete: "CASCADE",
      // 	allowNull: false,
      // 	references: {
<<<<<<< HEAD
<<<<<<< HEAD
      // 		model: "Country",
      // 		key: "id",
      // 	},
>>>>>>> 3bd88a8... lint code
      // },
=======
=======
>>>>>>> 825ba26... rebase develop
      countryId: {
        type: Sequelize.INTEGER,
      },
<<<<<<< HEAD
>>>>>>> 98750bc... rebase develop
=======
      location: {
        type: Sequelize.STRING,
      },
      // countryId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: false,
      //   references: {
      //     model: "Country",
      //     key: "id",
      //   },
      // },
>>>>>>> 825ba26... rebase develop
=======
      // 		model: "Countries",
=======
      // 		model: "Country",
>>>>>>> 92567b9... install sinon, remove plural tables
      // 		key: "id",
      // 	},
      // },
>>>>>>> 86cdcdb... lint code
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await queryInterface.dropTable("Securityinformation");
  },
=======
=======
>>>>>>> 060c3e6... resolve conflict
=======
>>>>>>> 080040d... feat(models): Design historical & security models
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Securityinformations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			countryId: {
				type: Sequelize.INTEGER,
			},
			location: {
				type: Sequelize.STRING,
			},
			// countryId: {
			// 	type: Sequelize.INTEGER,
			// 	onDelete: "CASCADE",
			// 	allowNull: false,
			// 	references: {
			// 		model: "Countries",
			// 		key: "id",
			// 	},
			// },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Securityinformations");
	},
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f15c36c... rebase develop
=======
    await queryInterface.dropTable("Securityinformations");
=======
    await queryInterface.dropTable("Securityinformation");
>>>>>>> 020be84... rebase develop
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3bd88a8... lint code
=======
=======
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Securityinformations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			countryId: {
				type: Sequelize.INTEGER,
			},
			location: {
				type: Sequelize.STRING,
			},
			// countryId: {
			// 	type: Sequelize.INTEGER,
			// 	onDelete: "CASCADE",
			// 	allowNull: false,
			// 	references: {
			// 		model: "Countries",
			// 		key: "id",
			// 	},
			// },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Securityinformations");
	},
>>>>>>> 080040d... feat(models): Design historical & security models
>>>>>>> 673fb64... rebase develop
=======
>>>>>>> 2aaae8d... rebase develop
=======
>>>>>>> 060c3e6... resolve conflict
=======
    await queryInterface.dropTable("Securityinformations");
=======
    await queryInterface.dropTable("Securityinformation");
>>>>>>> 92567b9... install sinon, remove plural tables
  },
>>>>>>> 86cdcdb... lint code
=======
>>>>>>> 080040d... feat(models): Design historical & security models
=======
>>>>>>> 83db9f1... test migration and seeders locally
};
