module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Historicalfact = sequelize.define("Historicalfacts", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
=======

  const Historicalfacts = sequelize.define("Historicalfacts", {
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
>>>>>>> 97b2f42... rebase develop
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
<<<<<<< HEAD
  Historicalfact.associate = models => {
    Historicalfact.belongsTo(models.Country, {
      as: "countryHistoricalFacts",
      foreignKey: "countryId",
    });
  };

  return Historicalfact;
=======

  Historicalfacts.associate = (models) => {
    Historicalfacts.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Historicalfacts;
>>>>>>> 97b2f42... rebase develop
};
