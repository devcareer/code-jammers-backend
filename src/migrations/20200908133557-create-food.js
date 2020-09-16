module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Food", {
      id: {
        allowNull: false,
<<<<<<< HEAD
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      countryId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      types: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      methodOfPreparation: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      gallery: {
        allowNull: false,
=======
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      countryId: {
        type: Sequelize.INTEGER,
      },
      types: {
        type: Sequelize.STRING,
      },
      methodOfPreparation: {
        type: Sequelize.STRING,
      },
      gallery: {
>>>>>>> 7927c34... feat(models): create models for music and food
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
    await queryInterface.dropTable("Food");
  },
};
