module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
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
    gallary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  City.associate = (models) => {
    City.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return City;
};
