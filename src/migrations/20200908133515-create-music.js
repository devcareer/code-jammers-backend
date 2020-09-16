module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Music", {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Music");
  },
};
