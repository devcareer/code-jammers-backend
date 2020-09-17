module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("States", {
    countryId: {
      type: DataTypes.STRING,
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

  State.associate = (models) => {
    State.belongsTo(models.Country, {
      as: "countryState",
      foreignKey: "countryId",
    });
  };

  return State;
};
