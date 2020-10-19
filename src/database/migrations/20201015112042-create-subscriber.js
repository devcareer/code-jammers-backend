module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Subscribers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      email: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      subscribed: {
        type: Sequelize.BOOLEAN
      },
      newsletter: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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
  down: async queryInterface => queryInterface.dropTable("Subscribers")
};
