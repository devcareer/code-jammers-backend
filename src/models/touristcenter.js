module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const TouristCenter = sequelize.define("TouristCenters", {
=======
  const TouristCenter = sequelize.define("TouristCenter", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
>>>>>>> 29193c4... feature(tourist-city-models) - create models
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
