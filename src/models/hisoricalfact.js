module.exports = (sequelize, DataTypes) => {
  const Hisoricalfact = sequelize.define("Hisoricalfact", {
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
<<<<<<< HEAD
    Hisoricalfact.belongsTo(models.Countries, {
      as: "historicalFact",
      foreignKey: "countryId",
=======
    Hisoricalfact.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
>>>>>>> 92567b9... install sinon, remove plural tables
    });
  };

  return Hisoricalfact;
};
