module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("TouristCenters", {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  TouristCenter.associate = models => {
    TouristCenter.belongsTo(models.Country, {
      as: "country",
      foreignKey: "countryId",
    });
  };

  return TouristCenter;
};
