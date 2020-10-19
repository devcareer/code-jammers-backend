module.exports = (sequelize, DataTypes) => {
  const Newsletter_Subscribers = sequelize.define("Newsletter_Subscribers", {
    subscriberId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Subscribers",
        key: "id",
      },
      onDelete: "CASCADE"
    },
    newsletterId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      references: {
        model: "Newsletters",
        key: "id",
      },
      onDelete: "CASCADE"
    }
  });
  Newsletter_Subscribers.associate = models => {
    Newsletter_Subscribers.belongsTo(models.Subscribers, {
      as: "newsletterSubscriber",
      foreignKey: "subscriberId"
    });
    Newsletter_Subscribers.belongsTo(models.Newsletters, {
      as: "subscribedNewsletter",
      foreignKey: "newsletterId"
    });
  };
  return Newsletter_Subscribers;
};
