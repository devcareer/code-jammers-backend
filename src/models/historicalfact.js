module.exports = (sequelize, DataTypes) => {

  const Historicalfacts = sequelize.define("Historicalfacts", {
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Historicalfacts.associate = (models) => {
    Historicalfacts.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Historicalfacts;
};
