/* eslint-disable require-jsdoc */
export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
      .then(() => queryInterface.createTable("Countries", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        nameOfCountry: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        gallery: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        capital: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        population: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        officialLanguage: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        region: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        currency: {
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
      }));
  },
  down: queryInterface => queryInterface.dropTable("Countries"),
};
