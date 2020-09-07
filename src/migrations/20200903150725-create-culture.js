"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Culture", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      types: {
        type: Sequelize.STRING,
      },
      festivals: {
        type: Sequelize.STRING,
      },
      dressing: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      gallery: {
        type: Sequelize.STRING,
      },
      tribe: {
        type: Sequelize.STRING,
      },
      countryId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Country",
          key: "id",
        },
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
    await queryInterface.dropTable("Culture");
  },
};
