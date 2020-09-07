module.exports = (sequelize, DataTypes) => {
  const TouristCenter = sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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

  TouristCenter.associate = (models) => {
    TouristCenter.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return TouristCenter;
};
