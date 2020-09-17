export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("States", {
          countryId: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
          },
          name: {
            type: Sequelize.TEXT,
          },
          capital: {
            type: Sequelize.TEXT,
          },
          gallery: {
            type: Sequelize.TEXT,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        })
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("States");
  },
};
