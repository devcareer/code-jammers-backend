module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("TouristCenters", {
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
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  TouristCenter.associate = (models) => {
    TouristCenter.belongsTo(models.Country, {
      as: "countryTouristCenter",
      foreignKey: "countryId",
    });
  };

  return TouristCenter;
};
