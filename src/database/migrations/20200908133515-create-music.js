module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
    .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
    .then(() => queryInterface.createTable("Musics", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      countryId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gallery: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      event: {
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
  down: async queryInterface => queryInterface.dropTable("Music"),
};