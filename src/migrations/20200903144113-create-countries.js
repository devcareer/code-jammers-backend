"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Country", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namesOfCountries: {
        type: Sequelize.STRING,
      },
      gallery: {
        type: Sequelize.STRING,
      },
      capital: {
        type: Sequelize.STRING,
      },
      population: {
        type: Sequelize.INTEGER,
      },
      officialLanguage: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      currency: {
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
    await queryInterface.dropTable("Country");
  },
};
