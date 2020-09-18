module.exports = {
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
};