module.exports = (sequelize, DataTypes) => {
  const Hisoricalfact = sequelize.define("Hisoricalfact", {
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

  Hisoricalfact.associate = models => {
    Hisoricalfact.belongsTo(models.Countries, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Hisoricalfact;
};
