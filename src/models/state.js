module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("States", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  State.associate = models => {
    State.belongsTo(models.Country, {
      as: "country",
      foreignKey: "countryId",
    });
  };

  return State;
};
