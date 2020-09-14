export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
      .then(() => queryInterface.createTable("Cultures", {
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
          types: { allowNull: false, type: Sequelize.STRING },
          festivals: { allowNull: false, type: Sequelize.STRING },
          dressing: { allowNull: false, type: Sequelize.STRING },
          language: { allowNull: false, type: Sequelize.STRING },
          gallery: { allowNull: false, type: Sequelize.STRING },
          tribe: { allowNull: false, type: Sequelize.STRING },
          createdAt: { allowNull: false, type: Sequelize.DATE },
          updatedAt: { allowNull: false, type: Sequelize.DATE },
        }),
      );
  },
  down: queryInterface => queryInterface.dropTable("Cultures"),
};
