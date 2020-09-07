module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Securityinformation", {
=======
    await queryInterface.createTable("Securityinformations", {
>>>>>>> lint code
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
      // 		model: "Countries",
      // 		key: "id",
      // 	},
>>>>>>> lint code
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
    await queryInterface.dropTable("Securityinformation");
=======
    await queryInterface.dropTable("Securityinformations");
>>>>>>> lint code
  },
};
