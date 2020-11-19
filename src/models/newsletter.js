module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define("Newsletters", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  Newsletter.associate = models => {
    Newsletter.belongsToMany(models.Subscribers, {
      through: "Newsletter_Subscriber",
      as: "subscriber",
      foreignKey: "newsletterId",
      onDelete: "CASCADE",
      hooks: true
    });
  };
  return Newsletter;
};
