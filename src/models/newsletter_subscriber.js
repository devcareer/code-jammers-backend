module.exports = (sequelize, DataTypes) => {
  const Newsletter_Subscribers = sequelize.define("Newsletter_Subscribers", {
    subscriberId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Subscribers",
        key: "id",
      },
    },
    newsletterId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      references: {
        model: "Newsletters",
        key: "id",
      },
    }
  });
  Newsletter_Subscribers.associate = models => {
    Newsletter_Subscribers.belongsTo(models.Subscribers, {
      as: "newsletterSubscriber",
      foreignKey: "subscriberId",
      onDelete: "CASCADE",
      hooks: true
    });
    Newsletter_Subscribers.belongsTo(models.Newsletters, {
      as: "subscribedNewsletter",
      foreignKey: "newsletterId",
      onDelete: "CASCADE",
      hooks: true
    });
  };
  return Newsletter_Subscribers;
};
