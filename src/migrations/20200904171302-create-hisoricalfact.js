module.exports = {
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hisoricalfacts", {
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
      gallery: {
        type: Sequelize.STRING,
      },
      // countryId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: false,
      //   references: {
      //     model: "Countries",
      //     key: "id",
      //   },
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
    await queryInterface.dropTable("Hisoricalfacts");
  },
=======
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Hisoricalfacts", {
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
			gallery: {
				type: Sequelize.STRING,
			},
			// countryId: {
			//   type: Sequelize.INTEGER,
			//   onDelete: "CASCADE",
			//   allowNull: false,
			//   references: {
			//     model: "Countries",
			//     key: "id",
			//   },
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
		await queryInterface.dropTable("Hisoricalfacts");
	},
>>>>>>> 080040d... feat(models): Design historical & security models
};
