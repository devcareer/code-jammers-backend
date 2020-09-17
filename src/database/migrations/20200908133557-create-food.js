module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
    .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
    .then(() => queryInterface.createTable("Foods", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      countryId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      methodOfPreparation: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      gallery: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })),
  down: async queryInterface => queryInterface.dropTable("Foods"),
};
