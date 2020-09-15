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

  City.associate = models => {
    City.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return City;
};
