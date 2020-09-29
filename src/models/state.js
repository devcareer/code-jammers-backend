module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("States", {
    countryId: {
      type: DataTypes.STRING,
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

  State.associate = (models) => {
    State.belongsTo(models.Countries, {
      as: "countryState",
      foreignKey: "countryId",
    });
  };

  return State;
};
