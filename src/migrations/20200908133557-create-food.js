module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Food", {
      id: {
        allowNull: false,
<<<<<<< HEAD
<<<<<<< HEAD
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
<<<<<<< HEAD
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
=======
>>>>>>> 523ffd3... make corrections
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
<<<<<<< HEAD
>>>>>>> 7927c34... feat(models): create models for music and food
=======
        allowNull: false,
>>>>>>> 523ffd3... make corrections
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
=======
      countryId: { type: Sequelize.UUID, allowNull: false },

      types: { allowNull: false, type: Sequelize.STRING },

      methodOfPreparation: { allowNull: false, type: Sequelize.TEXT },

      gallery: { allowNull: false, type: Sequelize.STRING },

      createdAt: { allowNull: false, type: Sequelize.DATE },

      updatedAt: { allowNull: false, type: Sequelize.DATE },
>>>>>>> 95cf471... resolve codeclimate
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Food");
  },
};
