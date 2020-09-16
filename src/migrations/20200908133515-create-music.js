module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Music", {
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
=======
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      countryId: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      gallery: {
        type: Sequelize.STRING,
      },
      event: {
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
    await queryInterface.dropTable("Music");
  },
};
