module.exports = (sequelize, DataTypes) => {
  const Securityinformation = sequelize.define("Securityinformation", {
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Securityinformation.associate = models => {
    Securityinformation.belongsTo(models.Countries, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Securityinformation;
};
