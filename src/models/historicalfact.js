module.exports = (sequelize, DataTypes) => {
  const Historicalfacts = sequelize.define("Historicalfacts", {
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Historicalfact.associate = models => {
    Historicalfact.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Historicalfact;
};
