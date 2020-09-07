module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("Cities", {
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

<<<<<<< HEAD
  City.associate = models => {
=======
  City.associate = (models) => {
>>>>>>> 048f235... feature(tourist-city-models) - create models
    City.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return City;
};
