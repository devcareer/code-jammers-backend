export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
      .then(() => queryInterface.createTable("EthnicGroups", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        countryId: {
          type: Sequelize.UUID,
          references: {
            model: "Countries",
            key: "id",
          },
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        festivals: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        dressing: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        language: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        gallery: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        culturalPractices: {
          allowNull: false,
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
      }));
  },
  down: queryInterface => queryInterface.dropTable("EthnicGroups"),
};
