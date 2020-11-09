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
    about: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    Historicalfact.belongsTo(models.Countries, {
      as: "countryHistoricalFacts",
      foreignKey: "countryId",
    });
    Historicalfact.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "relatedId",
      onDelete: 'cascade',
      hooks: true, 
    });
  };

  return Historicalfact;
};
