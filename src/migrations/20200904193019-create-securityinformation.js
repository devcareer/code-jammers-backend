module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
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
      // 	type: Sequelize.INTEGER,
      // 	onDelete: "CASCADE",
      // 	allowNull: false,
      // 	references: {
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
    await queryInterface.dropTable("Securityinformation");
  },
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
>>>>>>> f15c36c... rebase develop
=======
    await queryInterface.dropTable("Securityinformations");
=======
    await queryInterface.dropTable("Securityinformation");
>>>>>>> 020be84... rebase develop
  },
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
};
