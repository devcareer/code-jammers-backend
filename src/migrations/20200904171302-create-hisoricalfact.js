module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hisoricalfact", {
=======
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Hisoricalfacts", {
>>>>>>> 86cdcdb... lint code
=======
    await queryInterface.createTable("Hisoricalfact", {
>>>>>>> 92567b9... install sinon, remove plural tables
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
<<<<<<< HEAD
      //     model: "Country",
=======
      //     model: "Countries",
>>>>>>> 86cdcdb... lint code
=======
      //     model: "Country",
>>>>>>> 92567b9... install sinon, remove plural tables
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
<<<<<<< HEAD
    await queryInterface.dropTable("Hisoricalfact");
  },
=======
=======
>>>>>>> 080040d... feat(models): Design historical & security models
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
<<<<<<< HEAD
>>>>>>> 060c3e6... resolve conflict
=======
    await queryInterface.dropTable("Hisoricalfacts");
=======
    await queryInterface.dropTable("Hisoricalfact");
>>>>>>> 92567b9... install sinon, remove plural tables
  },
>>>>>>> 86cdcdb... lint code
=======
>>>>>>> 080040d... feat(models): Design historical & security models
};
