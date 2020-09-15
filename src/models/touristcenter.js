module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("TouristCenter", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  TouristCenter.associate = (models) => {
    TouristCenter.belongsTo(models.Country, {
      as: "country",
      foreignKey: "countryId",
      onDelete: "cascade",
    });
  };

  return TouristCenter;
};
