export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";").then(() => queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      email: { type: Sequelize.STRING },
      username: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING, defaultValue: "user" },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    }));
  },
  down: queryInterface => queryInterface.dropTable("Users"),
};
