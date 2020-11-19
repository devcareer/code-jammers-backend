module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
    .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
    .then(() => queryInterface.createTable("Comments", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      relatedId:{
        allowNull: false,
        type: Sequelize.UUID,
      },
      comment: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Comments");
  },
};
