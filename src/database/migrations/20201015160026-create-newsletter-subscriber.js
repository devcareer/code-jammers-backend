module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Newsletter_Subscribers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      newsletterId: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ["7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f"]
      },
      subscriberId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Newsletter_Subscribers");
  }
};
