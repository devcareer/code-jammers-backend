export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
      .then(() => queryInterface.createTable("TouristCenters", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        name: {
          type: Sequelize.STRING,
        },
        location: {
          type: Sequelize.STRING,
        },
        gallery: {
          type: Sequelize.STRING,
        },
        countryId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TouristCenters");
  },
};
