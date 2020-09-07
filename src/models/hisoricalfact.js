module.exports = (sequelize, DataTypes) => {
  const Hisoricalfact = sequelize.define("Hisoricalfacts", {
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

<<<<<<< HEAD
  Hisoricalfact.associate = models => {
=======
  Hisoricalfact.associate = (models) => {
>>>>>>> lint code
    Hisoricalfact.belongsTo(models.Countries, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Hisoricalfact;
};
