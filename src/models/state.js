module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("States", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
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
    State.belongsTo(models.Countries, {
      as: "countryState",
      foreignKey: "countryId",
    });

    State.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "relatedId",
      onDelete: "cascade",
      hooks: true,
    });
  };

  return State;
};
