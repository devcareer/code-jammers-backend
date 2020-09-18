module.exports = (sequelize, DataTypes) => {
  const Historicalfact = sequelize.define("Historicalfacts", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
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
      as: "countryHistoricalFacts",
      foreignKey: "countryId",
    });
  };

  return Historicalfact;
};
