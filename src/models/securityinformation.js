module.exports = (sequelize, DataTypes) => {
  const Securityinformation = sequelize.define("Securityinformations", {
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

<<<<<<< HEAD
  Securityinformation.associate = models => {
=======
  Securityinformation.associate = (models) => {
>>>>>>> lint code
    Securityinformation.belongsTo(models.Countries, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Securityinformation;
};
