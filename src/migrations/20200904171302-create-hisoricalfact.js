module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hisoricalfact", {
=======
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hisoricalfacts", {
>>>>>>> 86cdcdb... lint code
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
<<<<<<< HEAD
      //     model: "Country",
=======
      //     model: "Countries",
>>>>>>> 86cdcdb... lint code
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
<<<<<<< HEAD
    await queryInterface.dropTable("Hisoricalfact");
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
>>>>>>> 060c3e6... resolve conflict
=======
    await queryInterface.dropTable("Hisoricalfacts");
  },
>>>>>>> 86cdcdb... lint code
};
