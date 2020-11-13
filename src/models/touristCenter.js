module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("TouristCenters", {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  TouristCenter.associate = models => {
    TouristCenter.belongsTo(models.Countries, {
      as: "countryTouristCenter",
      foreignKey: "countryId",
    });

    TouristCenter.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "relatedId",
      onDelete: 'cascade',
      hooks: true, 
    });
  };

  return TouristCenter;
};
