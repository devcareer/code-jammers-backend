module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("TouristCenters", {
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
  });

  TouristCenter.associate = (models) => {
    TouristCenter.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return TouristCenter;
};
