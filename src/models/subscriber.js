module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define("Subscribers", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    newsletter: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ["Welcome to Know Africa"]
    }
  });
  Subscriber.associate = models => {
    Subscriber.belongsToMany(models.Newsletters, {
      through: "Newsletter_Subscriber",
      as: "newsletters",
      foreignKey: "subscriberId",
    });
  };
  return Subscriber;
};
