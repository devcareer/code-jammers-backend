module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("States", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capital: {
      type: DataTypes.TEXT,
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
