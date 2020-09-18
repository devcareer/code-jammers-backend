module.exports = (sequelize, DataTypes) => {
  const Hisoricalfact = sequelize.define("Hisoricalfacts", {
    countryId: {
      type: DataTypes.STRING,
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

  Hisoricalfact.associate = (models) => {
    Hisoricalfact.belongsTo(models.Countries, {
      as: "historicalFact",
      foreignKey: "countryId",
    });
  };

  return Hisoricalfact;
};
